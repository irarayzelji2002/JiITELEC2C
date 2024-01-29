import "./App.css";
import "./index.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Menu from "./Menu.js";
import Order from "./Order.js";

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
