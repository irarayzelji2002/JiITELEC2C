function Footer({ items }) {
  let itemCount = items.length;
  console.log(itemCount);
  let checkedItemCount = items.filter((item) => item.isChecked === true).length;
  console.log(checkedItemCount);
  let percentCompleted = (checkedItemCount / itemCount) * 100;
  console.log(Math.round(percentCompleted));

  return (
    <div className="status">
      You have{" "}
      {itemCount > 0 ? (
        <strong className="bold green">{itemCount}</strong>
      ) : (
        "no"
      )}{" "}
      items in your list, and you already completed{" "}
      {checkedItemCount > 0 ? (
        <span>
          already completed{" "}
          <strong className="bold green">{checkedItemCount}</strong> items{" "}
          <strong className="bold green">
            ({Math.round(percentCompleted)}%)
          </strong>
          .
        </span>
      ) : (
        "haven't completed any item yet."
      )}
    </div>
  );
}

export default Footer;
