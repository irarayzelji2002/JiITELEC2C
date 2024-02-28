import "./App.css";
import ProductList from "./ProductList";
import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const isLoggedIn = true;
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }
  // return <div className="App">{content}</div>;
  // can put ternary operator in jsx
  return (
    <div className="App">
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
      <ProductList />
    </div>
  );
}

export default App;
