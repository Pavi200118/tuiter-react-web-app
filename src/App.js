import React from 'react';
import Labs from "./labs";
import { Navigate } from 'react-router-dom';
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import ProfileScreen from "./tuiter/user/profile-screen";
import AuthContext from "./tuiter/user/auth-context";
import {BrowserRouter} from "react-router-dom";
import ProtectedRoute
  from "./tuiter/user/protected-route";
import {Routes, Route} from "react-router";
function App() {
 return (
  <BrowserRouter>
  <AuthContext>

<div className="container">

<Routes>
          <Route path="/"         element={<Navigate to="/labs"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
          <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfileScreen />
                </ProtectedRoute>
              }/>
        </Routes>
             </div>
             </AuthContext>

              </BrowserRouter>
   );
}
export default App;

