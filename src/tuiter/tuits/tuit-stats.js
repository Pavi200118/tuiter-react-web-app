import React from "react";
import { BsChatSquare, BsHeart, BsHeartFill,BsArrowRepeat, BsShare } from "react-icons/bs";
import "./index.css";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";



const TuitStats = ({ tuit, liked, replies, retuits, likes }) => {
const dispatch = useDispatch();
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
                  <BsHeart className="tuit-stat-icon" onClick={() => dispatch(updateTuitThunk({...tuit, likes: likes + 1 }))}/>
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
