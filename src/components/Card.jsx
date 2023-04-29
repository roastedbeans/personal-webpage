import React from "react";
import { Profile } from "./Profile";
import { ButtonList } from "./Button";

export const Card = () => {
  return (
    <>
      <Profile />
      <div className="w-[30rem]">
        <p className="w-10px mx-10 mt-10 mb-10 p-0 leading-2 select-none">
          Hi! I'm Vinch <br></br>
          <br></br> a 3rd year computer engineering student at the University of
          San Carlos. I am dedicated and passionate developer who is always
          looking for ways to improve my skills and knowledge in web development
          and game development.
        </p>
        <h2 className="w-10px mt-0-10 p-0 select-none">
          Where to find me on the web
        </h2>
      </div>
      <ButtonList />
    </>
  );
};

export default Card;
