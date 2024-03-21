import ToDoTask from "./ToDoTask";

function ToDoList({
  items,
  handleRemoveItem,
  handleCompletedItem,
  sortBy,
  theme,
}) {
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "name") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "isChecked") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.isChecked) - Number(a.isChecked));
  }

  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {/* <ToDoTask />
        <ToDoTask />
        <ToDoTask /> */}
        {sortedItems.map((item) => (
          //item.isDeleted === false && (
          <ToDoTask
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleCompletedItem={handleCompletedItem}
            theme={theme}
          />
          //)
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
