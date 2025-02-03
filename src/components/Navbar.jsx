import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Service</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </>
    );
  };
  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white font-bold">
              {navMenu()}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image src={"/assets/logo.svg"} width={50} height={50} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-white font-bold  menu menu-horizontal px-1">
            {navMenu()}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/login"} className="btn btn-outline btn-neutral">
            Login
          </Link>
          <Link href={"/register"} className="ml-2 btn btn-outline btn-neutral">
            Register
          </Link>
        </div>
        <div className="navbar-end">
          <Link href={"/"} className="btn btn-outline text-white font-semibold">
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
