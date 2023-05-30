import {useDispatch} from "react-redux";
import {createTuit, deleteTuit} from "./tuits-reducer.js";
import TuitStats from "./tuit-stats";
import { BsXLg } from 'react-icons/bs';

import { AiFillCheckCircle } from "react-icons/ai";
import "./index.css";
const TuitItem = (
{

    tuit = {
     "topic": "Space",
     "userName": "@spacex",
     "time": "2h",
     "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "teslaicon.png",
     "liked": true,
     "replies": 123,
     "retuits": 432,
     "likes": 2345,
     "handle": "@spacex",
     "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

   }

 }
 ) => {
 const dispatch = useDispatch();
const deleteTuitHandler = (id) => {

  dispatch(deleteTuit(id));
}
return(
<>
 <li className="list-group-item">
   <div className="row">
   <div className="col-auto">
          <img width={50}
               className="float-end rounded-circle"
               src={`/images/${tuit.image}`}/>
        </div>
  <div className="col-10">
    <div className="tuit-info">
      <span className="fw-bolder">{tuit.topic}</span>
      <AiFillCheckCircle className="tuit-verified-icon" />
      <span className="text-muted">{tuit.userName} . {tuit.time}</span>
    </div>
    <div>{tuit.title}</div>
  </div>
     <div className="col-8">
       <div>
         <button className="btn delete-button" onClick={() => deleteTuitHandler(tuit._id)}>
           <BsXLg />
         </button>
       </div>
     </div>
     <div className="col-auto">
            <TuitStats
            liked={tuit.liked}
            replies={tuit.replies}
            retuits={tuit.retuits}
            likes={tuit.likes}/>
          </div>
     </div>
</li>
</>
 );
};
export default TuitItem;

