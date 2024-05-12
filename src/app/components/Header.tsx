"use client";

import { useState } from "react";

export default function Navbar() {
  const [isSlideoverOpen, setSlideoverOpen] = useState(false);

  const toggleSlideover = () => {
    setSlideoverOpen((prevState) => !prevState);
    console.log(isSlideoverOpen);
  };

  return (
    <nav
      id="navbar"
      className="items-center justify-between fixed w-full top-0 flex h-20 px-4   md:px-20  md:h-24 bg-backgroundCream "
    >
      {/* Mobile Menu */}
      <div
        className={`z-10 order-2 md:hidden hamburger-icon ${
          isSlideoverOpen ? "open" : ""
        }`}
        onClick={toggleSlideover}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        onClick={toggleSlideover}
        id="slideover"
        className={` order-2 opacity-0 md:opacity-100  bg-backgroundCream md:h-auto  md:w-auto h-screen w-full flex items-center justify-center md:static  md:right-auto absolute top-0 right-0 md:transform-none transition ease-in-out duration-150 ${
          isSlideoverOpen
            ? "opacity-100"
            : "translate-x-full delay-75 duration-300"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center justify-evenly  gap-8  text-xl font-normal text-textBlack">
          <li>
            <a href="#main" className="hover:text-secondaryPurpleClicked">
              Main
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-secondaryPurpleClicked">
              About
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-secondaryPurpleClicked">
              Features
            </a>
          </li>
          <li>
            <a href="#questions" className="hover:text-secondaryPurpleClicked">
              Questions
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondaryPurpleClicked">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Small Logo and Label name */}
      <div className="order-1 flex flex-row flex-nowrap items-center">
        <svg
          height="24"
          viewBox="0 -960 960 960"
          className="text-secondaryOrange fill-current"
        >
          <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" />
        </svg>
        <h2 className="text-lg font-bold text-secondaryPurple">
          Michael&apos;s English
        </h2>
      </div>
    </nav>
  );
}
