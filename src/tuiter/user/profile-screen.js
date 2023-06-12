import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import LoginScreen from "./login-screen";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import * as authService from "../services/auth-service";
import { profileThunk, logoutThunk, updateUserThunk , registerThunk}
  from "../services/auth-thunks";
function ProfileScreen() {

 const { currentUser } = useSelector((state) => state.user);

 const [profile, setProfile] = useState(currentUser);

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const save = () => {
 dispatch(updateUserThunk({profile}));
 };

 useEffect(() => {
 async function fetchData(){
   const { payload } = await dispatch(profileThunk());
   console.log(payload)
   setProfile(payload);
  }
  fetchData();
 }, [dispatch]);

console.log(profile)

 return ( <div>
            <h1>Profile Screen</h1>

            {profile && (<div>
              <div>
               <label>First Name:</label>
               &nbsp;
               <input  id="firstName" type="text" value={profile.firstName || ""}
                onChange={(event) => {
                 const newProfile = {
                  ...profile, firstName: event.target.value,
                 };
                 setProfile(newProfile);
                }}/>
              </div>

              <div>
               <label>Last Name:</label>
               &nbsp;
               <input  id="lastName" type="text" value={profile.lastName || ""}
                onChange={(event) => {
                 const newProfile = {
                  ...profile, lastName: event.target.value,
                 };
                 setProfile(newProfile);
                }}/>
              </div></div>
            )}
            <button
             onClick={() => {
               dispatch(logoutThunk());
                setTimeout(() => {
                       navigate("/tuiter/login");
                     }, 2000);
             }}>                   Logout </button>
&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={save}>  Save  </button>
           </div> );

}
export default ProfileScreen;

