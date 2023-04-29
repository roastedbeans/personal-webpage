import React from "react";
import ProPic from "../assets/profile-image.png";

export const Profile = () => {
  return (
    <>
      <Image />
      <Name />
    </>
  );
};

const Name = () => {
  return (
    <>
      <h1 className="field-text select-none">VINCENT D. ABELLA</h1>
    </>
  );
};

const Image = () => {
  return (
    <div className="mt-4 image-container">
      <div className="overflow-hidden image-size bg-gradient-to-b from-[#f5cb5b] to-[#fffffd] rounded-full">
        <img className="object-scale-down" src={ProPic}></img>
      </div>
    </div>
  );
};
