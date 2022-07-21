import React from "react";
import styles from "./TopSlider.module.css";
import { Link } from "react-router-dom";

const TopSlider = () => {
  return (
    <div className={styles.main}>
      <div>
        <h1>TODAY'S TOP OFFERS</h1>
      </div>
      <div>
        <div className={styles.offerdiv}>
          <h2>Today only!</h2>
          <p>All Fun Size Fragrances</p>
          <p>$2.95</p>
          <p>
            Limit 20 with code
            <br />
            ONTHEGO In store:
            <br />
            must show email
          </p>
          <Link to="/fragrance">
            <button className={styles.button}>SHOP</button>
          </Link>
        </div>
        <div className={styles.offerdiv}>
          <h2>Ends today!</h2>
          <p>
            Wallflower Fragrance
            <br />
            Single refill
          </p>
          <p>$3.95</p>
          <Link to="/wallflower">
            <button className={styles.button}>SHOP</button>
          </Link>
        </div>
        <div className={styles.offerdiv}>
          <p>All Full-Size Body Care<br/>
          Buy 3, Get 1 FREE<br/>
          Lowest-priced item is free
          </p>
          <Link to="/fragrance">
            <button className={styles.button}>SHOP</button>
          </Link>
        </div>
        <div className={styles.offerdiv}>
          <h2>Today only!</h2>
          <p>All Fun Size Fragrances</p>
          <p>$2.95</p>
          <p>
            Limit 20 with code
            <br />
            ONTHEGO In store:
            <br />
            must show email
          </p>
          <Link to="/fragrance">
            <button className={styles.button}>SHOP</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
