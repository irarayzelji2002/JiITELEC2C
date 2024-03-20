import { useState } from "react";
function Form({ item, handleAddItem, setCounter, counter }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    setCounter(counter + 1);
    const newItem = {
      name: name,
      quantity: quantity,
      isChecked: false,
      isDeleted: false,
      id: counter,
    };
    handleAddItem(newItem);
    console.log(newItem);

    //initial state
    setName("");
    setQuantity(1);
  }
  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <select
          className="grey dropdown"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="todo-input standard-input"
          type="text"
          placeholder="Add a task."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="todo-btn standard-button" type="submit">
          I Got This!
        </button>
      </form>
    </div>
  );
}

export default Form;
