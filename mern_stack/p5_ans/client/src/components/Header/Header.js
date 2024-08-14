import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-5 px-14 bg-[#ffc017] text-black border-b border-b-black">
      <div className=" font-bold text-3xl">
        <Link to="/">
          <div className="">BB Blog</div>
        </Link>
      </div>
      <nav>
        <ul className="flex space-6x-4 text-sm">
          <li>
            <Link to="/about" className=" mr-10 ">
              Our Story
            </Link>
          </li>
          <li>
            <Link to="/write" className=" mr-10 ">
              Write
            </Link>
          </li>
          <li>
            <Link to="/signin" className="mr-10 ">
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/get-started"
              className=" bg-black text-white py-3 px-5 rounded-full ">
              Get started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
