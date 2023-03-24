import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/VA-Logo.svg";
import BtnHover from "../assets/ButtonHover.svg";

export const Navbar = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const onMouseEnter1 = () => {
    setHover1(true);
  };
  const onMouseLeave1 = () => {
    setHover1(false);
  };
  const onMouseEnter2 = () => {
    setHover2(true);
  };
  const onMouseLeave2 = () => {
    setHover2(false);
  };
  const onMouseEnter3 = () => {
    setHover3(true);
  };
  const onMouseLeave3 = () => {
    setHover3(false);
  };

  return (
    <nav className="h-14 bg-white border-gray-200 px-2 sm:px-6 py-.5 fixed top-0 left-0 w-full items-center dark:bg-[#181818] drop-shadow-lg border-solid">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center z-10">
          <img
            src={Icon}
            className="h-10 mr-3 sm:h-10 fixed top-2 left-2 logo"
          />
        </a>
      </div>
      <ul className="border-transparent w-full item-center justify-center z-10 flex m-0 p-0 border rounded-lg bg-transparent dark:bg-transparent dark:border-solid space-x-[30px]">
        <li onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
          <a
            href="#"
            className="z-10 absolute w-[120px] text-base font-semibold block py-4 pl-4 pr-4 text-white dark:hover:text-[#181818]"
            aria-current="page">
            Home
          </a>
          <img
            style={{
              animation: hover1 ? "down 200ms" : "up 100ms",
              transform: hover1 ? "translateY(0)" : "translateY(-120%)",
            }}
            className="h-16 sm:h-16 translate-y-[-120%]"
            src={BtnHover}></img>
          <div></div>
        </li>
        <li onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
          <a
            href="#"
            className="z-10 absolute w-[120px] text-base font-semibold block py-4 pl-0 pr-0 text-white dark:hover:text-[#181818]">
            About
          </a>
          <img
            id="about"
            style={{
              animation: hover2 ? "down 200ms" : "up 100ms",
              transform: hover2 ? "translateY(0)" : "translateY(-120%)",
            }}
            className="h-16 sm:h-16 translate-y-[-120%]"
            src={BtnHover}></img>
        </li>
        <li onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
          <a
            href="#"
            className="z-10 absolute w-[120px] text-base font-semibold block py-4 pl-0 pr-0 text-white dark:hover:text-[#181818]">
            Resume
          </a>
          <img
            style={{
              animation: hover3 ? "down 200ms" : "up 100ms",
              transform: hover3 ? "translateY(0)" : "translateY(-120%)",
            }}
            className="h-16 sm:h-16 translate-y-[-120%]"
            src={BtnHover}></img>
        </li>
      </ul>
    </nav>
  );
};
