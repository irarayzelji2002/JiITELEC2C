function Sort({ sortBy, setSortBy, theme }) {
  return (
    <div className="sortDiv">
      <strong className="dropdown-text">Sort By</strong>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={`dropdown standard-button ${theme}-BG`}
      >
        <option value="input">Input</option>
        <option value="name">Name</option>
        <option value="isChecked">Is Checked</option>
      </select>
    </div>
  );
}

export default Sort;
