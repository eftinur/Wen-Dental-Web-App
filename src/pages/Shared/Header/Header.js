import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../../../component/SecondaryButton/SecondaryButton";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = ({handler}) => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/appointment">Get Appointment</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {user?.email ? (
        <>
        <SecondaryButton
        handler={handleLogOut}
        >
          Sign out
        </SecondaryButton>
        </>
      ) : (
        <SecondaryButton>
          <Link to="/login">Sign in</Link>
        </SecondaryButton>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 w-3/4 mx-auto justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hamburger"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <span className="logo-wrapper">Wen Dental</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hamburger"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
