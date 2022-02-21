import React from "react";
import Share from "./Share";
import "./Feed.css";
import Post from "./Post";
import { Posts } from "../DummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedContainer">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
