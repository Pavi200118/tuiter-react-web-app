import React from "react";
import TuitItem from "./tuit-item";
 // Assuming you have tuits.json in the same directory
 import {useSelector} from "react-redux";
const TuitsList = () => {
const { tuits } = useSelector((state) => state.tuits);
  return (
  <ul className="list-group">
    <div className="tuits-list">

      {tuits.map((tuit) => (
        <TuitItem
         key={tuit._id}
          userName={tuit.userName}
          title={tuit.title}
          time={tuit.time}
          image={tuit.image}
          liked={tuit.liked}
          replies={tuit.replies}
          retuits={tuit.retuits}
          likes={tuit.likes}
          handle={tuit.handle}
          tuit={tuit}
        />
      ))}
    </div>
    </ul>
  );
};

export default TuitsList;
