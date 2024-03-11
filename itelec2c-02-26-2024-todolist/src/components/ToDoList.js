import ToDoTask from "./ToDoTask";

function ToDoList({ items, handleRemoveItem, handleCompletedItem }) {
  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {/* <ToDoTask />
        <ToDoTask />
        <ToDoTask /> */}
        {items.map((item) => (
          //item.isDeleted === false && (
          <ToDoTask
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleCompletedItem={handleCompletedItem}
          />
          //)
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
