import React from 'react';
import Labs from "./labs";
import { Navigate } from 'react-router-dom';
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import ProfileScreen from "./tuiter/user/profile-screen";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
function App() {
 return (
  <BrowserRouter>
<div className="container">

<Routes>
          <Route path="/"         element={<Navigate to="/labs"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
          <Route path="/profile" element={<ProfileScreen/>}/>
        </Routes>
             </div>
              </BrowserRouter>
   );
}
export default App;

