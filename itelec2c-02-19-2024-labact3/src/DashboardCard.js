import React, { useState } from "react";

function DashboardCard(props) {
  const [isSaved, setIsSaved] = useState(false);
  const toggleColor = () => {
    setIsSaved(!isSaved);
    console.log(!isSaved);
  };

  return (
    <div className="DashboardCard">
      <div className="image">
        <div className="overlay">
          <button className="btn overlay-category">
            <div className="category-text">{props.dataObj.category}</div>
            <i class="fa-solid fa-chevron-down category-chevron"></i>
          </button>
          <button
            className={`btn red-button ${
              isSaved === true ? "saved-button" : ""
            }`}
            onClick={toggleColor}
          >
            {isSaved === false ? "Save" : "Saved"}
          </button>
        </div>
        <img
          src={props.dataObj.media}
          alt="pic1"
          className="img-fluid dashboard-media"
        />
        <div className="overlay">
          <button className="btn white-icon-button share">
            <i class="fa-solid fa-share"></i>
          </button>
          <button className="btn white-icon-button">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
        </div>
      </div>
      <button className="description btn">{props.dataObj.description}</button>
      <button className="user btn">
        <img
          src={props.dataObj.userProfile}
          alt="profile1"
          className="card-profile"
        />
        <div className="username">{props.dataObj.username}</div>
      </button>
    </div>
  );
}

export default DashboardCard;
