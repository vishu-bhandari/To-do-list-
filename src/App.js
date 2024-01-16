import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputlist, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const inputEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setInputList("");
  };

  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
            return index!==id; 
        })
    })
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="add a Item"
            onChange={inputEvent}
            value={inputlist}
            name="addItem"
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li>{inputlist}</li> */}
            {Items.map((itemval, index) => {
              return <ToDoList key={index} id={index} text={itemval}
              onSelect={deleteItems} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
