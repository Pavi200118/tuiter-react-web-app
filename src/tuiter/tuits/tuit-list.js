import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
 // Assuming you have tuits.json in the same directory
 import {useDispatch, useSelector} from "react-redux";
 import {findTuitsThunk} from "../services/tuits-thunks";

const TuitsList = () => {
const {tuits, loading} = useSelector((state) => state.tuits);
const dispatch = useDispatch();
useEffect(() => {
   dispatch(findTuitsThunk())
 }, [])

  return (
  <ul className="list-group">
   { loading &&
         <li className="list-group-item">
           Loading...
         </li>
       }

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
          dislikes = {tuit.dislikes}
          handle={tuit.handle}
          tuit={tuit}
        />
      ))}
    </div>
    </ul>
  );
};

export default TuitsList;
