import "./App.css";
import Header from "./Header.js";
import MoreIdeas from "./MoreIdeas.js";
import Dashboard from "./Dashboard.js";
import Help from "./Help.js";
import React, { useState, useEffect } from "react";
import { handleScreenResize } from "./responsiveScript";

function App() {
  useEffect(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  const [activePage, setActivePage] = useState("home");
  const onNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <Header onNavClick={onNavClick} activePage={activePage} />
      <MoreIdeas />
      <Dashboard />
      <Help />
    </div>
  );
}

export default App;
