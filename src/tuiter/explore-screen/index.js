import React, { useEffect } from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import starshipImage from "../../images/starship1.jpeg";
import { initializeTuits } from "../reducers/tuits-reducer-2";

function ExploreScreen() {
  const dispatch = useDispatch();
  const { tuits } = useSelector((state) => state.anothertuits);

  useEffect(() => {
    dispatch(initializeTuits());
  }, [dispatch]);

  return (
    <>
      <div className="row">
             <div className="col-11 position-relative">
               <input placeholder="Search Tuiter"
                      className="form-control rounded-pill ps-5"/>
               <AiOutlineSearch className="fs-3 position-absolute
                             wd-nudge-up"/>
             </div>
             <div className="col-1">
               <GoGear className="wd-top-4 float-end
                             fs-3 position-relative"/>
             </div>
           </div>

           <ul className="nav nav-pills nav-fill mb-2 mt-2 wd-tabs">
             <li className="nav-item wd-abc">
               <a className="nav-link active">For You</a>
             </li>
             <li className="nav-item wd-abc">
               <a className="nav-link">Trending</a>
             </li>
             <li className="nav-item wd-abc">
               <a className="nav-link">News</a>
             </li>
             <li className="nav-item wd-abc">
                      <a className="nav-link">Sports</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline wd-abc">
                             <a className="nav-link">Entertainment</a>
                           </li>

           </ul>

           <div className="position-relative mb-2">
             <img src={starshipImage} className="w-100"/>
             <h1 className="position-absolute wd-nudge-up text-white">
               SpaceX Starship</h1>
           </div>

      <TuitSummaryList tuits={tuits} />
    </>
  );
}

export default ExploreScreen;
