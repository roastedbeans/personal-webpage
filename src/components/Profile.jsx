import React from "react";

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
    <div className="mt-6 image-container">
      <div className="image-size">
        <img
          className="object-scale-down"
          src="public\assets\profile-image.png"></img>
      </div>
    </div>
  );
};
