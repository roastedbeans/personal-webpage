import React from "react";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <>
      <div className="card-container item-center">
        <div className="card items-center">
          <Card />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
