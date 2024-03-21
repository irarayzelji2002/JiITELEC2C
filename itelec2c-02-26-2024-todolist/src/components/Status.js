function Footer({ items }) {
  let itemCount = items.length;
  let checkedItemCount = items.filter((item) => item.isChecked === true).length;
  let percentCompleted = (checkedItemCount / itemCount) * 100;
  console.log(
    `itemCount: ${itemCount}; checkedItemCount: ${checkedItemCount}; percentCompleted: ${Math.round(
      percentCompleted
    )}`
  );

  return (
    <div className="status">
      You have{" "}
      {itemCount > 0 ? <strong className="bold">{itemCount}</strong> : "no"}{" "}
      items in your list, and you already completed{" "}
      {checkedItemCount > 0 ? (
        <span>
          already completed <strong className="bold">{checkedItemCount}</strong>{" "}
          items{" "}
          <strong className="bold">({Math.round(percentCompleted)}%)</strong>.
        </span>
      ) : (
        "haven't completed any item yet."
      )}
    </div>
  );
}

export default Footer;
