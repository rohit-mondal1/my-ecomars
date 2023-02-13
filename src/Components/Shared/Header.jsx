import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const maun = (
    <>
      <li>
        <Link to="/">LogIn</Link>
      </li>
      <li>
        <Link to="/">Jobs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-blue-600 bg-opacity-70 text-white">
      <div className="navbar-start">
        <Link to="/" className=" normal-case text-xl">
          WEB-NAME
        </Link>
      </div>
      {/* deo */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li className="">
            <input className="w-96 rounded-none border border-white"  type="text" placeholder={<></>} />
          </li>
          {maun}
        </ul>
      </div>

      {/* left */}
      <div className="navbar-end">
        <div className="lg:block hidden ">
          <Link to="/" className="btn ">
            Get started
          </Link>
        </div>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact  dropdown-content mt-3 p-2  bg-base-100 rounded-box w-52 shadow-xl"
          >
            <li>
              <Link to="/">Get started</Link>
            </li>
            {maun}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
