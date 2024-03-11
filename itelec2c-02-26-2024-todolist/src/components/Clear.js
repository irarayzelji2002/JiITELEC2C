function Clear({ handleClearList }) {
  return (
    <button
      className="clear-btn standard-button"
      onClick={() => handleClearList()}
    >
      Clear List
    </button>
  );
}

export default Clear;
