import React from "react";
import Feed from "../Components/Feed"
import NavBar from "../Components/NavBar";
import RightBar from "../Components/RightBar";
import SideBar from "../Components/SideBar";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar/>
      </div>
    </div>
  );
};

export default Home;
