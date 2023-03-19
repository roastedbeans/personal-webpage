import React from "react";
import "../App.css";

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
      <h1 class="field-text">VINCENT D. ABELLA</h1>
    </>
  );
};

const Image = () => {
  return (
    <div class="mt-6 image-container">
      <div class="image-size">
        <img
          class="object-scale-down"
          src="/src/assets/profile-image.png"></img>
      </div>
    </div>
  );
};
