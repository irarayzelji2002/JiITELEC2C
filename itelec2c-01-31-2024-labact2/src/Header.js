import ProfileMenu from "./ProfileMenu.js";

function Header() {
  return (
    <div className="header">
      <nav
        className="navbar navbar-expand-sm"
        style={{ backgroundColor: "#ffffff" }}
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <a className="navbar-brand navbar-bottom-space" href="#">
            <img
              src="./Pinterest-logo.png"
              alt="Logo"
              width="28"
              height="28"
              className="d-inline-block align-text-top"
            />
          </a>
          <li className="navbar-nav nav-item navbar-bottom-space">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="navbar-nav nav-item navbar-bottom-space">
            <a className="nav-link" href="#">
              Create
            </a>
          </li>
          <button
            className="navbar-toggler md"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-magnifying-glass navbar-icon"></i>
          </button>

          <a href="#" className="order-1">
            <i className="navbar-icon fa-solid fa-bell"></i>
          </a>
          <a href="#" className="order-1">
            <i className="navbar-icon fa-solid fa-comment-dots"></i>
          </a>
          <div className="order-1 profile-nav">
            <a href="#">
              <div className="btn-profile btn">I</div>
            </a>
            <a
              data-bs-toggle="collapse"
              href="#profileCollapse"
              role="button"
              aria-expanded="false"
              aria-controls="profileCollapse"
            >
              <i className="navbar-icon chevron fa-solid fa-chevron-down"></i>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSearch">
            <input
              type="text"
              className="search-bar fontAwesome form-control"
              placeholder="&#xf002;  Search"
            />
          </div>
        </div>
      </nav>
      <ProfileMenu />
    </div>
  );
}

export default Header;
