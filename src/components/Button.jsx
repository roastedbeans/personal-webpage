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
    <div className="flex item-center justify-center width: 50% height: 100%">
      <a href="https://www.facebook.com/thevinchi05">
        <span className="logo fa-stack fa-2x">
          <i
            styles="--fa-primary-color: orangered;"
            className="fab fa-facebook fa-stack-1x"></i>
        </span>
      </a>
      <a href="https://www.instagram.com/vinchoutsidewalls">
        <span className="logo fa-stack fa-2x">
          <i className="fab fa-instagram fa-stack-1x"></i>
        </span>
      </a>
      <a href="https://twitter.com/vinchi_05">
        <span className="logo fa-stack fa-2x">
          <i className="fab fa-twitter fa-stack-1x"></i>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/vinch05/">
        <span className="logo fa-stack fa-2x">
          <i className="fab fa-linkedin fa-stack-1x"></i>
        </span>
      </a>
      <a href="https://github.com/roastedbeans">
        <span className="logo fa-stack fa-2x">
          <i className="fab fa-github fa-stack-1x"></i>
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
