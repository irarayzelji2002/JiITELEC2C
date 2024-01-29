import { pizzaData } from "./data.js";
import Pizza from "./Pizza.js";

function Menu() {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian cousine. 6 creative dishes choose from. All from our
        store oven, all organic delicious.{" "}
      </p>
      <div>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
