function ToDoTask({ item, handleRemoveItem, handleCompletedItem, theme }) {
  return (
    <div
      className={`todo standard-todo ${
        item.isChecked === true && "completed"
      } ${theme}-todo`}
    >
      <li>
        {item.quantity.toString()} {item.name}
      </li>
      <button
        className={`delete-btn standard-button ${theme}-button`}
        onClick={() => handleRemoveItem(item.id)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
      <button
        className={`check-btn standard-button ${theme}-button`}
        onClick={() => handleCompletedItem(item.id)}
      >
        <i className="fa-solid fa-check"></i>
      </button>
    </div>
  );
}

export default ToDoTask;
