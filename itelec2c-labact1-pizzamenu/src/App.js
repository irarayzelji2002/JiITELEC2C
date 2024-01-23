import "./App.css";
import "./index.css";
import { pizzaData } from "./data.js";
const publicPath = `${process.env.PUBLIC_URL}`;

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
      <Order></Order>
    </div>
  );
}

export default App;

function Header() {
  return (
    <div className="header">
      <h1>Fast react pizza Co.</h1>
    </div>
  );
}

function Footer() {
  const date = new Date();
  const currentTime = date.getHours() * 100 + date.getMinutes();
  console.log(date.getMinutes());
  const isOpen = currentTime >= 1200 && currentTime <= 2200; //12PM & 10PM

  const showTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    //second: "2-digit",
  });

  return (
    <div>
      <h1 className="footer">
        It is currently {showTime}. We're{" "}
        {isOpen
          ? "open. Come visit us or order online."
          : "closed. We'll be open from 12:00PM - 10:00PM."}
      </h1>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian cousine. 6 creative dishes choose from. All from our
        store oven, all organic delicious.{" "}
      </p>
      <div className="pizzas">
        {/* <Pizza i={0} />
        <Pizza i={1} />
        <Pizza i={2} />
        <Pizza i={3} />
        <Pizza i={4} />
        <Pizza i={5} /> */}
        {Array.from({ length: pizzaData.length }).map((_, index) => (
          <Pizza key={index} i={index} />
        ))}
      </div>
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img
        src={"".concat(publicPath, pizzaData[props.i].photoName)}
        alt={"Image of ".concat(pizzaData[props.i].name)}
      ></img>
      <div className="pizza">
        <h3>{pizzaData[props.i].name}</h3>
        <p>{pizzaData[props.i].ingredients}</p>
        <span>{pizzaData[props.i].price}</span>
      </div>
    </div>
  );
}

function Order() {
  return <button className="btn">Order</button>;
}
