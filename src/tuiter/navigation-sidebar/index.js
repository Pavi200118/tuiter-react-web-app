import React from "react";
import { Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faMinusCircle, faSignIn, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
 const { currentUser } = useSelector((state) => state.user);

  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [ "home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
  const icons = {

    home: "fa fa-home",
    explore: "fa fa-hashtag",
    notifications: "fa fa-bell",
    messages: "fa fa-envelope",
    bookmarks: "fa fa-bookmark",
    lists: "fa fa-list",
    profile: "fa fa-user",
    more: "fas fa-ellipsis",
  };

  return (
    <div className="list-group">
<Link to="/tuiter" className="list-group-item text-capitalize">
        <span className="icon">
          <i className="fab fa-twitter"></i>
        </span>
      </Link>
      {links.map((link) => (

        <Link
          to={`/tuiter/${link}`}
          className={`list-group-item text-capitalize ${
            active === link ? "active" : ""
          }`}
          key={link}
        >

          <span className="wd-icon">
            <i className={icons[link]}></i>
          </span>
          <span className="wd-text">{link}</span>
        </Link>

      ))}
      {!currentUser && <Link className={`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/tuiter/login">
                      <FontAwesomeIcon icon={faSignIn} />
                      <span className="d-none d-xl-inline">{"login"}</span>
                  </Link>
                  }
                  {!currentUser && <Link className={`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/tuiter/register">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <span className="d-none d-xl-inline">{"register"}</span>
                  </Link>
                  }
                  {currentUser && <Link className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/tuiter/profile">
                      <FontAwesomeIcon icon={faUser} />
                      <span className="d-none d-xl-inline">{"profile"}</span>
                  </Link>
                  }
      <button className="btn btn-primary rounded-pill mt-3">Tuit</button>


    </div>
  );
};

export default NavigationSidebar;
