import React from 'react';
import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index.js";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem
  from "./who-to-follow-list/who-to-follow-list-item";
  import TuitSummaryItem from "./tuit-summary-list/tuit-summary-item";
  import TuitSummaryList from "./tuit-summary-list/index";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import anothertuitsReducer from "./reducers/tuits-reducer-2";
import tuitReducer from "./tuits/tuits-reducer";
const store = configureStore(
  {reducer: {who: whoReducer,
  anothertuits: anothertuitsReducer,
  tuits : tuitReducer}});


function Tuiter() {
   return(
   <Provider store={store}>

      <div>
      <Nav/>
        <div className="row">
               <div className="col-2">
                 <NavigationSidebar />
               </div>
               <div className="col-7">
                <Routes>
                  <Route path="/home" element={<HomeScreen />} />
                  <Route path="/explore" element={<ExploreScreen />} />
                  <Route path="/bookmarks" element={<BookmarksScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
                </Routes>


               </div>
               <div className="col-3">
                  <WhoToFollowList />


               </div>
             </div>
           </div>
 </Provider>
   );
}
export default Tuiter

