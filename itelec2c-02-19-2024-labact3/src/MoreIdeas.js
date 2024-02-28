import MoreIdeasCard from "./MoreIdeasCard.js";
import { data_more_ideas } from "./data_more_ideas.js";

function MoreIdeas() {
  return (
    <div className="slider" id="slider">
      <div className="moreIdeas slide" id="slide">
        {data_more_ideas.map((data) => (
          <MoreIdeasCard dataObj={data} />
        ))}
      </div>
      {/* <button class="ctrl-btn pro-prev">Prev</button>
      <button class="ctrl-btn pro-next">Next</button> */}
    </div>
  );
}

export default MoreIdeas;
