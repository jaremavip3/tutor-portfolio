"use client";

import { useState } from "react";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickOnNavbar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav
      id="navbar"
      className="  fixed w-full top-0 flex h-20 px-4 md:px-20 md:h-24 bg-slate-300 "
    >
      <div className=" flex justify-between  w-full  ">
        <div className="flex items-center gap-2  text-nowrap">
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
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={
              "appearance-none inline-flex items-center rounded-full w-12 h-12 justify-center text-sm text-background  md:hidden  "
            }
            onClick={handleClickOnNavbar}
          >
            {isClicked ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5139c1"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5139c1"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </>
            )}
          </button>
        </div>
        {isClicked && (
          <>
            <div
              className="  left-0  top-20 absolute text-xl font-normal justify-center text-textBlack bg-backgroundCream w-full h-screen"
              id="navbar-hidden-menu"
            >
              <ul className="flex flex-col items-center justify-evenly mt-16 gap-8 ">
                <li>
                  <a href="#main" className="   ">
                    Maina
                  </a>
                </li>

                <li>
                  <a href="#about" className="     ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#features" className="    ">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#questions" className="">
                    Questions
                  </a>
                </li>
                <li>
                  <a href="#contact" className="   ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
        <div className="items-center hidden  md:flex   ">
          <ul className="flex flex-row  text-base font-light  gap-8  ">
            <li>
              <a
                href="#main"
                className="  md:hover:text-secondaryPurpleClicked transition duration-100 ease-in-out "
              >
                Main
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="     md:hover:text-secondaryPurpleClicked transition duration-100 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="    md:hover:text-secondaryPurpleClicked transition duration-100 ease-in-out"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#questions"
                className="   md:hover:text-secondaryPurpleClicked transition  duration-100 ease-in-out"
              >
                Questions
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="  md:hover:text-secondaryPurpleClicked transition  duration-100 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
