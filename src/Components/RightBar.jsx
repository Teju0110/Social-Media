import React from "react";
import "./RightBar.css";
import gift from "../Images/gift.png";
import ad from "../Images/ad.jpg";
import { Users } from "../DummyData";
import Online from "./Online";
import user4 from "../Images/user4.jpg";
import user1 from "../Images/user1.jpg";
import user2 from "../Images/user2.jpg";
import user3 from "../Images/user3.jpg";
import user5 from "../Images/user5.jpg";
import profile from "../Images/Profile.jpg";

const RightBar = ({profile}) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="HomeRightbar">
          <div className="rightbarWrapperHomeRightbar">
            <div className="birthdayContainer">
              <img className="birthdayImg" src={gift} alt="" />
              <span className="birthdayText">
                <b>Pola Foster</b> and <b>3 other friends</b> have a birhday
                today.
              </span>
            </div>
            <img className="rightbarAd" src={ad} alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="onlineFriendList">
              {Users.map((u) => (
                <Online key={u.id} user={u} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={user1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={user2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={user3} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={user4} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={user5} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={user4} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default RightBar;
