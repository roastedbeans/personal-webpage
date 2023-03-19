import React from "react";
import { Profile } from "./Profile";
import { ButtonList, PortfolioButton } from "./Button";

export const Card = () => {
  return (
    <>
      <Profile />
      <PortfolioButton />
      <h2 class="mt-6">Where to find me on the web</h2>
      <ButtonList />
    </>
  );
};

export default Card;
