function ProfileMenu() {
  return (
    <div class="collapse" id="profileCollapse">
      <div class="card profile-menu">
        <div class="card-header profile-card-header">Currently in</div>
        <a href="#" className="d-flex align-items-center current-user">
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
          <button class="list-group-item profile-item">Add account</button>
          <button class="list-group-item profile-item">
            Convert to business
          </button>
        </ul>
        <div class="card-header profile-card-header">More options</div>
        <ul class="list-group list-group-flush profile-list-group">
          <button class="list-group-item profile-item">Settings</button>
          <button class="list-group-item profile-item">
            Tune your home feed
          </button>
          <button class="list-group-item profile-item">
            Install the Windows app
          </button>
          <button class="list-group-item profile-item">
            Your privacy right
          </button>
          <button class="list-group-item profile-item">
            Get help
            <i class="fa-solid fa-arrow-right-from-bracket exit-icon"></i>
          </button>
          <button class="list-group-item profile-item">
            See terms of service
            <i class="fa-solid fa-arrow-right-from-bracket exit-icon"></i>
          </button>
          <button class="list-group-item profile-item">
            See privacy policy
            <i class="fa-solid fa-arrow-right-from-bracket exit-icon"></i>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ProfileMenu;
