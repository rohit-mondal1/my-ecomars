import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const maun = (
    < >
      <li className="font-semibold">
        <Link to="/">LogIn</Link>
      </li>

      <li tabIndex={0}>
          <Link to='/'  className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2 bg-blue-500 bg-opacity-30 text-black rounded-non ">
            <li><Link to='/'>Submenu 1</Link></li>
            <li><Link to='/'>Submenu 2</Link></li>
          </ul>
        </li>


      <li className="font-semibold">
        <Link to="/">Become a Seller</Link>
      </li>
    </>
  );
  const searchBar = (
    <>
      <li className="hover:bg-white hover:rounded-full text-black">
        <input
          className="lg:w-96 rounded-none border border-white"
          type="text"
          placeholder={<></>}
        />
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-blue-600 bg-opacity-70 text-white px-4">
        <div className="navbar-start">
          <Link to="/" className=" normal-case text-xl">
            WEB-NAME
          </Link>
        </div>
        {/* deo */}
        <div className="navbar-center hidden md:flex sm:flex lg:hidden">
          <ul className="menu menu-horizontal px-1 gap-6">{searchBar}</ul>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 rounded-none">
            {searchBar}
            {maun}
          </ul>
        </div>

        {/* left */}
        <div className="navbar-end">
          <div className="lg:block hidden ">
            <Link to="/" className="text-2xl ">
            <FaShoppingCart/>
            </Link>
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="h-5 w-5" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact  dropdown-content mt-3 p-2  bg-base-100 text-black rounded-box w-52 shadow-xl"
            >
              <li>
                <Link to="/"><FaShoppingCart/></Link>
              </li>
              {maun}
            </ul>
          </div>
        </div>
      </div>

      {/* mobil size search bar */}

      <div className="navbar-center flex  md:hidden sm:hidden lg:hidden w-11/12 mx-auto">
        <ul className="menu w-full menu-horizontal px-1 gap-6 border">
          {searchBar}
        </ul>
      </div>
    </div>
  );
};

export default Header;
