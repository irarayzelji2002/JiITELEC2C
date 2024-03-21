function Clear({ handleClearList, theme }) {
  return (
    <button
      className={`clear-btn standard-button ${theme}-button`}
      onClick={() => handleClearList()}
    >
      Clear List
    </button>
  );
}

export default Clear;
