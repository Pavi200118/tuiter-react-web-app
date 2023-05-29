import React from "react";
import { BsChatSquare, BsHeart, BsHeartFill,BsArrowRepeat, BsShare } from "react-icons/bs";
import "./index.css";

const TuitStats = ({ liked, replies, retuits, likes }) => {
  return (
    <div className="tuit-stats">
      <div className="tuit-stat">
        <BsChatSquare className="tuit-stat-icon" />
        <span className="tuit-stat-count">{replies}</span>
      </div>
      <div className="tuit-stat">
        <BsArrowRepeat className="tuit-stat-icon" />
        <span className="tuit-stat-count">{retuits}</span>
      </div>
      <div className="tuit-stat">
        {liked ? (
                  <BsHeartFill className="tuit-stat-icon liked" />
                ) : (
                  <BsHeart className="tuit-stat-icon" />
                )}
        <span className="tuit-stat-count">{likes}</span>
      </div>
      <div className="tuit-stat">
        <BsShare className="tuit-stat-icon" />
      </div>

    </div>
  );
};

export default TuitStats;
