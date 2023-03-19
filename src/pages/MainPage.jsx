import React from "react";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import "../App.css";

export const MainPage = () => {
  return (
    <>
      <div class="card-container item-center">
        <div class="card items-center">
          <Card />
        </div>
      </div>
      <div class="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
