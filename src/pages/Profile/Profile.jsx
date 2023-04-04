const Profile = () => {
  return (
    <div className="Profile">
      <div className="profile-user">
        <div className="profile-image__cover">
          <img src="" alt="" />
        </div>
        <div className="profile-user__info">
          <div className="user-info">
            <div className="user-info__avatar">
              <img src="" alt="" />
            </div>
            <div className="user-info__general">
              <h2>Thái Minh Quang</h2>
              <span>80 bạn bè</span>
              <div className="user-info__friends">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-post"></div>
    </div>
  );
};

export default Profile;
