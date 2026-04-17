import React from "react";
import { NavLink } from "react-router";
import logoImg from "../assets/logo.png"
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const NavBar = () => {
  const links = (
    <>
      <NavLink to={"/"} className={({isActive})=> isActive? "px-4 py-2 text-white font-semibold rounded-sm bg-[#244D3F] flex items-center gap-1" : "px-4 py-2 text-[#64748B] font-medium rounded-sm flex items-center gap-1"}><RiHome2Line /> Home</NavLink>
      <NavLink to={"/timeline"} className={({isActive})=> isActive? "px-4 py-2 text-white font-semibold rounded-sm bg-[#244D3F] flex items-center gap-1" : "px-4 py-2 text-[#64748B] font-medium rounded-sm flex items-center gap-1"}><IoTimeOutline /> Timeline</NavLink>
      <NavLink to={"/stats"} className={({isActive})=> isActive? "px-4 py-2 text-white font-semibold rounded-sm bg-[#244D3F] flex items-center gap-1" : "px-4 py-2 text-[#64748B] font-medium rounded-sm flex items-center gap-1"}><ImStatsDots /> Stats</NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logoImg} alt="logo" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
