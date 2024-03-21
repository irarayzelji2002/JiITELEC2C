function Header({ changeTheme, theme }) {
  return (
    <div id="header">
      <div className="flexrow-container">
        <div
          className="standard-theme theme-selector"
          onClick={() => changeTheme("standard")}
        ></div>
        <div
          className="light-theme theme-selector"
          onClick={() => changeTheme("light")}
        ></div>
        <div
          className="darker-theme theme-selector"
          onClick={() => changeTheme("darker")}
        ></div>
      </div>
      <h1 id="title" className={`${theme}-title`}>
        Just get it.<div id="border"></div>
      </h1>
      <h5 className="subtitle">Grocery List</h5>
    </div>
  );
}

export default Header;
