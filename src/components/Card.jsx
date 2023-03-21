import React from "react";
import { Profile } from "./Profile";
import { ButtonList, PortfolioButton } from "./Button";

export const Card = () => {
  return (
    <>
      <Profile />
      <PortfolioButton />
      <h2 className="mt-6 select-none">Where to find me on the web</h2>
      <ButtonList />
    </>
  );
};

export default Card;
