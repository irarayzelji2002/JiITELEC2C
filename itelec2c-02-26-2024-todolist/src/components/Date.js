import moment from "moment";

function Date() {
  const date = moment().format("MMMM DD, YYYY");
  const time = moment().format("hh:mm A");

  return (
    <div className="dateDiv">
      <p>
        <span id="datetime">
          It's {date}, {time}.
        </span>
      </p>
    </div>
  );
}

export default Date;
