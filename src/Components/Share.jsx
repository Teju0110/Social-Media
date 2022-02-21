import React from "react";
import profile from "../Images/Profile.jpg";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import './Share.css'

const Share = () => {
  return (
    <div className="share">
      <div className="shareContainer">
        <div className="shareTop">
          <img className="shareImage" src={profile} alt="" />
          <input placeholder="What's in your mind ?" className="shareInput" />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
        <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>

                <button className="shareButton">Share</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
