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
 dispatch(updateUserThunk(profile));
 };

 useEffect(() => {
 const fetchData = async () => {
             const { payload } = await dispatch(profileThunk());
             setProfile(payload);
         };
         fetchData();
     }, []);



 return ( <div>
            <h1>Profile Screen</h1>

            {profile && (<div>
              <div className="mt-2">
               <label>First Name:</label>
               &nbsp;

               <input id="firstName" className="form-control" type="text" value={profile.firstName || ""}
                onChange={(event) => {
                 const newProfile = {
                  ...profile, firstName: event.target.value,
                 };
                 setProfile(newProfile);
                }}/>
              </div>

              <div className="mt-2">
               <label>Last Name:</label>
               &nbsp;
               <input  id="lastName" className="form-control" type="text" value={profile.lastName || ""}
                onChange={(event) => {
                 const newProfile = {
                  ...profile, lastName: event.target.value,
                 };
                 setProfile(newProfile);
                }}/>
              </div></div>
            )}
            <button className="btn btn-primary mt-2"
             onClick={() => {
               dispatch(logoutThunk());

                       navigate("/tuiter/login");

             }}style={ backgroundColor: 'red'}>                   Logout </button>
&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary mt-2" onClick={save}>  Save  </button>
           </div> );

}
export default ProfileScreen;

