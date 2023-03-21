import React from "react";
import { useState } from "react";

export const Navbar = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <nav className="h-14 bg-white border-gray-200 px-2 sm:px-6 py-.5 fixed top-0 left-0 w-full items-center dark:bg-[#181818] drop-shadow-lg border-solid">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center z-10">
          <img
            src="src\assets\VA-Logo.svg"
            className="h-10 mr-3 sm:h-10 fixed top-2 left-2 logo"
          />
        </a>
      </div>
      <ul className="border-transparent w-full item-center justify-center z-10 flex m-0 p-0 border rounded-lg bg-transparent dark:bg-transparent dark:border-solid space-x-[120px]">
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a
            href="#"
            className="z-10 absolute w-[120px] text-base font-semibold block py-4 pl-4 pr-4 text-white dark:hover:text-[#181818]"
            aria-current="page">
            Home
          </a>
          <div></div>
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a
            href="#"
            className="z-10 absolute w-[120px] text-base font-semibold block py-4 pl-0 pr-0 text-white dark:hover:text-[#181818]">
            About
          </a>
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a
            href="#"
            className="z-10 absolute w-[120px] text-base font-semibold block py-4 pl-0 pr-0 text-white dark:hover:text-[#181818]">
            Resume
          </a>
          <img
            style={{
              animation: hover ? "down 200ms" : "up 100ms",
              transform: hover ? "translateY(0)" : "translateY(-120%)",
            }}
            class="h-16 sm:h-16 translate-y-[-120%]"
            src="/src/assets/ButtonHover.svg"></img>
        </li>
      </ul>
    </nav>
  );
};
