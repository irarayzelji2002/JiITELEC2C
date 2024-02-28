function ToDoTask({ item, handleRemoveItem, handleCompletedItem }) {
  return (
    <div
      className={`todo standard-todo ${item.isChecked === true && "checked"}`}
    >
      <li>
        {item.quantity.toString()} {item.name}
      </li>
      <button
        className="delete-btn standard-button"
        onClick={() => handleRemoveItem(item.id)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
      <button
        className="check-btn standard-button"
        onClick={() => handleCompletedItem(item.id)}
      >
        <i className="fa-solid fa-check"></i>
      </button>
    </div>
  );
}

export default ToDoTask;
