import React from "react";
import "./UserInfo.css";
import { useUserStore } from "../../library/userStore";

function UserInfo() {
  const { currentUser } = useUserStore();
  return (
    <div className="userinfo">
      <div className="user">
        <img src={currentUser.avatar || "img/avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="img/more.png" alt="" />
        <img src="img/video.png" alt="" />
        <img src="img/edit.png" alt="" />
      </div>
    </div>
  );
}

export default UserInfo;