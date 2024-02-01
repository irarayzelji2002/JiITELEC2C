function MoreIdeasCard(props) {
  const color = props.dataObj.color;
  return (
    <div className="moreIdeasCard" style={{ backgroundColor: color }}>
      <div className="three-pics">
        <img
          src={props.dataObj.pictures[0]}
          alt="pic1"
          className="more-ideas-card-pic pic1"
        />
        <img
          src={props.dataObj.pictures[1]}
          alt="pic2"
          className="more-ideas-card-pic pic2"
        />
        <img
          src={props.dataObj.pictures[2]}
          alt="pic3"
          className="more-ideas-card-pic pic3"
        />
      </div>
      <div className="more-ideas-text">
        <div className="more-ideas-for">More ideas for</div>
        <div className="category">{props.dataObj.category}</div>
      </div>
    </div>
  );
}

export default MoreIdeasCard;
