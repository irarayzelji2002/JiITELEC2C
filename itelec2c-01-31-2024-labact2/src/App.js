import "./App.css";
import Header from "./Header.js";
import MoreIdeas from "./MoreIdeas.js";
import Dashboard from "./Dashboard.js";
import Help from "./Help.js";
import React, { useEffect } from "react";
import { handleScreenResize } from "./responsiveScript";

function App() {
  useEffect(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <MoreIdeas />
      <Dashboard />
      <Help />
    </div>
  );
}

export default App;
