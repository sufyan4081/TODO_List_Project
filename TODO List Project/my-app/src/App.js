import React, { useState } from "react";
import ListInputText from "./component/ListInputText";
import TodoList from "./component/TodoList";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const addList = (inputText) => {
    setList([...list, inputText]);
  };

  const deleteItems = (key) => {
    let newList = [...list];
    newList.splice(key, 1);
    setList(newList);
  };

  const handleClear = () => {
    setList([]);
  };

  return (
    <div className="container">
      <div className="Todo-box">
        <ListInputText addList={addList} />

        {list.map((items, i) => {
          return <TodoList key={i} items={items} deleteItems={deleteItems} />;
        })}
        
      </div>
      <button className="btn-clear" onClick={handleClear}>
        Remove All
      </button>
    </div>
  );
};
export default App;
