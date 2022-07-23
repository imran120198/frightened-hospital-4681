import React from "react";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        marginTop: "20px",
        width: "90%",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <Link to="/topoffers">
          <div className={styles.cat}>TOP OFFERS</div>
        </Link>
      </div>
      <div>
        <Link to="/bodycare">BODY CARE</Link>
      </div>
      <div>
        <Link to="/candle">CANDLES</Link>
      </div>
      <div>
        <Link to="/fragrance">HOME FRAGRANCES</Link>
      </div>
      <div>
        <Link to="/soaps">HAND SOAPS & SANITIZERS</Link>
      </div>
      <div>
        <Link to="/">MEN'S</Link>
      </div>
      <div>
        <Link to="/gifts">GIFTS</Link>
      </div>
      <div>
        <Link to="/newandnow">NEW & NOW</Link>
      </div>
    </div>
  );
};

export default Categories;
