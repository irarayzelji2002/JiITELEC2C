import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Date from "./components/Date";
import ToDoList from "./components/ToDoList";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isDeleted: true } : item
      )
    );
    console.log(items);
  };

  const handleCompletedItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: true } : item
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <Form items={items} handleAddItem={handleAddItem} />
      <Date />
      <ToDoList
        items={items}
        handleRemoveItem={handleRemoveItem}
        handleCompletedItem={handleCompletedItem}
      />
    </div>
  );
}

export default App;
