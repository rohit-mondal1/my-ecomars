import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ImBoxAdd } from "react-icons/im";
import { SiSelenium } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {






  // ////////////////////////////
  const maun = (
    <>
      <li className="font-semibold">
        <Link to="/">Become a Seller</Link>
      </li>
    </>
  );
  const secendmanue = (
    <>
      <li className="font-semibold">
        <Link to="/">
          <CgProfile /> Profile
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/">
          <FaShoppingCart /> wishlist
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/">
          <ImBoxAdd /> My Order
        </Link>
      </li>
    </>
  );
  const searchBar = (
    <p className=" hover:bg-white hover:rounded-full text-black relative ">
      <input
        className="lg:w-96 md:w-96 py-3 px-2"
        type="text"
        placeholder="search products"
      />
      <BsSearch className="text-black absolute right-[30px] top-[10px] text-2xl  " />
    </p>
  );
/////////////////////////////////////////////////////




  return (
    <div className="bg-blue-600 bg-opacity-70 pb-4">
      <div className="navbar  text-white px-4">
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
            {/* big devise  */}
            <li tabIndex={0}>
              <Link to="/" className="justify-between font-semibold">
                LogIn
                <IoIosArrowDropdown className="text-2xl" />
              </Link>
              <ul className="p-2 z-50 bg-blue-500 bg-opacity-30 text-black rounded-non ">
                {secendmanue}
                <li>
                  <Link to="/" className="font-semibold">
                    <FiLogOut /> Log out
                  </Link>
                </li>
              </ul>
            </li>
            {maun}
          </ul>
        </div>

        {/* left */}
        <div className="navbar-end">
          <div className="lg:block hidden ">
            <Link to="/" className="text-2xl ">
              <FaShoppingCart />
            </Link>
          </div>
          {/*mobile hamburger */}
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="h-5 w-5" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact  dropdown-content mt-3 p-2  bg-base-100 text-black rounded-box w-52 shadow-xl"
            >
              {secendmanue}

              <p className="flex items-center justify-center ml-[-10px] pl-0">
                <SiSelenium />

                {maun}
              </p>
              <li className="font-semibold">
                <Link to="/">
                  <FiLogOut /> Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobil size search bar */}

      <div className="navbar-center flex  md:hidden sm:hidden lg:hidden w-11/12 mx-auto ">
        <ul className="menu w-full menu-horizontal px-1 gap-6 relative ">
          <input className="w-full py-3 px-3" type="text" placeholder={<></>} />
          <BsSearch className="text-black absolute right-[30px] top-[10px] text-2xl  " />
        </ul>
      </div>
    </div>
  );
};

export default Header;
