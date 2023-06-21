import React from "react";
import { BsChatSquare, BsHeart, BsHeartFill,BsArrowRepeat, BsShare } from "react-icons/bs";
import "./index.css";
import { FaThumbsDown } from 'react-icons/fa';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";



const TuitStats = ( {tuit} ) => {
console.log(tuit)
const dispatch = useDispatch();
const updateTuitHandler = (tuits, likes, liked) => {
  dispatch(updateTuitThunk( tuits, likes, liked));
}
  return (
    <div className="tuit-stats">
      <div className="tuit-stat">
        <BsChatSquare className="tuit-stat-icon" />
        <span className="tuit-stat-count">{tuit.replies}</span>
      </div>
      <div className="tuit-stat">
        <BsArrowRepeat className="tuit-stat-icon" />
        <span className="tuit-stat-count">{tuit.retuits}</span>
      </div>
      <div className="tuit-stat">
        {tuit.liked ? (
                  <BsHeartFill className="tuit-stat-icon liked" onClick={() => updateTuitHandler({
                                                                                      ...tuit,
                                                                                       likes: tuit.likes - 1,
                                                                                        liked: false
                                                                                        })}/>
                ) : (
                  <BsHeart className="tuit-stat-icon" onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
                                                                         })}/>
                )}
        <span className="tuit-stat-count">{tuit.likes}</span>
      </div>
      <div className = "tuit-stat">
      <FaThumbsDown className="tuit-stat-icon" onClick={() => updateTuitHandler({
                                                                      ...tuit,
                                                                      dislikes: tuit.dislikes + 1
                                                                  })}/>
      <span className="tuit-stat-count">{tuit.dislikes}</span>
      </div>
      <div className="tuit-stat">
        <BsShare className="tuit-stat-icon" />
      </div>

    </div>
  );
};

export default TuitStats;
