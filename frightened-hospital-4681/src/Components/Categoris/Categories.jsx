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
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/topoffers"
        >
          <div className={styles.cat}>TOP OFFERS</div>
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/bodycare">
          BODY CARE
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/candle">
          CANDLES
        </Link>
      </div>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/fragrance"
        >
          HOME FRAGRANCES
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/soaps">
          HAND SOAPS & SANITIZERS
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          MEN'S
        </Link>
      </div>
      <div>
        <Link style={{ textDecoration: "none", color: "black" }} to="/gifts">
          GIFTS
        </Link>
      </div>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/newandnow"
        >
          NEW & NOW
        </Link>
      </div>
    </div>
  );
};

export default Categories;
