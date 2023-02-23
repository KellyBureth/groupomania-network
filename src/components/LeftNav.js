import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const LeftNav = () => {
  const userData = useSelector((state) => state.userReducer);

  const ADMIN = process.env.REACT_APP_API_ADMIN_ROLE;

  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" activeclassname="active-left-nav">
            <br />
            <i className="fas fa-house"></i>
            <br />
          </NavLink>
          <br />
          <NavLink to="/trending" activeclassname="active-left-nav">
            <br />
            <i className="fas fa-square-poll-vertical"></i>
            <br />
          </NavLink>
          <br />
          <NavLink to="/favorites" activeclassname="active-left-nav">
            <br />
            <i className="fa-solid fa-heart-circle-check"></i>
            <br />
          </NavLink>
          <br />
          <NavLink to="/profil" activeclassname="active-left-nav">
            <br />
            <i className="fa-solid fa-house-user"></i>
            <br />
          </NavLink>
          {userData.role === ADMIN && (
            <NavLink to="/dashboard" activeclassname="active-left-nav">
              <br />
              <i className="fa-solid fa-unlock"></i>
              <br />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
