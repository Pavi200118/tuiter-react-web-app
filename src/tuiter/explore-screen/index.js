import React from "react";
import TuitSummaryList from "../tuit-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
import starshipImage from "../../images/starship1.jpeg";
function ExploreScreen() {
 return(
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
     <ul className="nav nav-pills nav-fill mb-2 mt-2 d-flex flex-wrap">
       <li className="nav-item flex-grow-1">
         <a className="nav-link active">For You</a>
       </li>
       <li className="nav-item flex-grow-1">
         <a className="nav-link">Trending</a>
       </li>
       <li className="nav-item flex-grow-1">
         <a className="nav-link">News</a>
       </li>
       <li className="nav-item flex-grow-1">
                <a className="nav-link">Sports</a>
              </li>
              <li className="nav-item flex-grow-1 d-none d-sm-inline">
                       <a className="nav-link">Entertainment</a>
                     </li>

     </ul>
     <div className="position-relative mb-2">
       <img src={starshipImage} className="w-100"/>
       <h1 className="position-absolute wd-nudge-up text-white">
         SpaceX Starship</h1>
     </div>
     <TuitSummaryList/>
   </>
 );
};
export default ExploreScreen;

