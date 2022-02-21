import React from 'react'
import Feed from "../Components/Feed"
import NavBar from "../Components/NavBar";
import RightBar from "../Components/RightBar";
import SideBar from "../Components/SideBar";
import post5 from '../Images/post5.jpg'
import user5 from '../Images/user5.jpg'
import './Profile.css'

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={post5}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user5}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile