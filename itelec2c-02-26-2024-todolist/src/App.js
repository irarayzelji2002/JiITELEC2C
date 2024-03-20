import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Date from "./components/Date";
import ToDoList from "./components/ToDoList";
import SortAndClear from "./components/SortAndClear";
import Status from "./components/Status";

function App() {
  const initialItems = [
    {
      name: "Milk",
      quantity: 1,
      isChecked: false,
      isDeleted: false,
      id: 1,
    },
    {
      name: "Coffee",
      quantity: 2,
      isChecked: false,
      isDeleted: false,
      id: 2,
    },
    {
      name: "Sugar",
      quantity: 3,
      isChecked: false,
      isDeleted: false,
      id: 3,
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [sortBy, setSortBy] = useState("input");
  const [counter, setCounter] = useState(4);
  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    // setItems((items) =>
    //   items.map((item) =>
    //     item.id === id ? { ...item, isDeleted: true } : item
    //   )
    // );
    setItems((items) => items.filter((item) => item.id !== id));
    console.log(items);
  };

  const handleCompletedItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: true } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form
        items={items}
        handleAddItem={handleAddItem}
        setCounter={setCounter}
        counter={counter}
      />
      <Date />
      <Status items={items} />
      <SortAndClear
        sortBy={sortBy}
        setSortBy={setSortBy}
        handleClearList={handleClearList}
      />
      <ToDoList
        items={items}
        handleRemoveItem={handleRemoveItem}
        handleCompletedItem={handleCompletedItem}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
