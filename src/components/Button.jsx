import React from "react";
import "../App.css";

export const ButtonList = () => {
  return (
    <>
      <Button />
    </>
  );
};

const Button = () => {
  return (
    <div class="flex item-center justify-center width: 50% height: 100%">
      <a href="https://www.facebook.com/thevinchi05">
        <span class="logo fa-stack fa-2x">
          <i
            styles="--fa-primary-color: orangered;"
            class="fab fa-facebook fa-stack-1x"></i>
        </span>
      </a>
      <a href="https://www.instagram.com/vinchoutsidewalls">
        <span class="logo fa-stack fa-2x">
          <i class="fab fa-instagram fa-stack-1x"></i>
        </span>
      </a>
      <a href="https://twitter.com/vinchi_05">
        <span class="logo fa-stack fa-2x">
          <i class="fab fa-twitter fa-stack-1x"></i>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/vinch05/">
        <span class="logo fa-stack fa-2x">
          <i class="fab fa-linkedin fa-stack-1x"></i>
        </span>
      </a>
      <a href="https://github.com/roastedbeans">
        <span class="logo fa-stack fa-2x">
          <i class="fab fa-github fa-stack-1x"></i>
        </span>
      </a>
    </div>
  );
};

export const PortfolioButton = () => {
  return (
    <>
      <button>MY PORTFOLIO</button>
    </>
  );
};
export default ButtonList;
