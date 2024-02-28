import Header from "./Header.js";

function ProfileMenu({ activePage, onNavClick }) {
  return (
    <div class="collapse" id="profileCollapse">
      <div class="card profile-menu">
        <div class="card-header profile-card-header">Currently in</div>
        <a
          href="#"
          className="d-flex align-items-center current-user"
          onClick={() => onNavClick("profile")}
        >
          <div className="user-profile btn">I</div>
          <div className="user-info ">
            <ul class="list-group list-group-flush profile-list-group">
              <li
                class="list-group-item profile-item-name"
                style={{ paddingBottom: "2px" }}
              >
                Ira Rayzel Ji
              </li>
              <li class="list-group-item profile-item-user">Personal</li>
              <li class="list-group-item profile-item-user">
                irarayzelji@gmail.com
              </li>
            </ul>
          </div>
          <div style={{ color: "black" }}>
            <i class="fa-solid fa-check"></i>
          </div>
        </a>
        <div class="card-header profile-card-header">Your accounts</div>
        <ul class="list-group list-group-flush profile-list-group">
          <button
            class={`list-group-item profile-item ${
              activePage === "addAccount" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("addAccount")}
          >
            Add account
          </button>
          <button
            class={`list-group-item profile-item ${
              activePage === "convertToBusiness" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("convertToBusiness")}
          >
            Convert to business
          </button>
        </ul>
        <div class="card-header profile-card-header">More options</div>
        <ul class="list-group list-group-flush profile-list-group">
          <button
            class={`list-group-item profile-item ${
              activePage === "settings" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("settings")}
          >
            Settings
          </button>
          <button
            class={`list-group-item profile-item ${
              activePage === "tuneUpYourFeed" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("tuneUpYourFeed")}
          >
            Tune your home feed
          </button>
          <button
            class={`list-group-item profile-item ${
              activePage === "installTheWindowsApp" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("installTheWindowsApp")}
          >
            Install the Windows app
          </button>
          <button
            class={`list-group-item profile-item ${
              activePage === "yourPrivacyRight" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("yourPrivacyRight")}
          >
            Your privacy right
          </button>
          <button
            class={`list-group-item profile-item ${
              activePage === "getHelp" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("getHelp")}
          >
            Get help
            <i class="fa-solid fa-arrow-right-from-bracket exit-icon"></i>
          </button>
          <button
            class={`list-group-item profile-item ${
              activePage === "termsOfService" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("termsOfService")}
          >
            See terms of service
            <i class="fa-solid fa-arrow-right-from-bracket exit-icon"></i>
          </button>
          <button
            class={`list-group-item profile-item ${
              activePage === "seePrivacyPolicy" ? "active-profile-item" : ""
            }`}
            onClick={() => onNavClick("seePrivacyPolicy")}
          >
            See privacy policy
            <i class="fa-solid fa-arrow-right-from-bracket exit-icon"></i>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ProfileMenu;
