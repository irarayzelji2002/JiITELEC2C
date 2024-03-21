import Clear from "./Clear";
import Sort from "./Sort";

function SortAndClear({ sortBy, setSortBy, handleClearList, theme }) {
  return (
    <div className="sortAndClear">
      <Sort sortBy={sortBy} setSortBy={setSortBy} theme={theme} />
      <Clear handleClearList={handleClearList} theme={theme} />
    </div>
  );
}

export default SortAndClear;
