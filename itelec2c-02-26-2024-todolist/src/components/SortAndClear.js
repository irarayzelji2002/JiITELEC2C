import Clear from "./Clear";
import Sort from "./Sort";

function SortAndClear({ sortBy, setSortBy, handleClearList }) {
  return (
    <div className="sortAndClear">
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
      <Clear handleClearList={handleClearList} />
    </div>
  );
}

export default SortAndClear;
