import React from "react";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sbmain}>
      <div>
        <h5>TOP OFFERS</h5>
        <p>
          Buy 3, Get 3 Free All Full-Size
          <br /> Body Care
        </p>
        <p>
          Buy 3, Get 1 Free Select
          <br /> Travel, Hand & Lip Care
        </p>
      </div>
      <div>
        <h5>BATH & SHOWER</h5>
        <p>All Bath & Shower</p>
        <p>Body Wash & Shower Gel</p>
        <p>Bubble Bath</p>
        <p>Body Scrub</p>
        <p>Bar Soap</p>
        <p>Bath Accessories</p>
      </div>
      <div>
        <h5>MOISTURIZER</h5>
        <p>All Moisturizer</p>
        <p>Body Lotion</p>
        <p>Body Cream</p>
        <p>Hand Cream</p>
        <p>Lip Gloss & Balms</p>
      </div>
      <div>
        <h5>FRAGRANCE</h5>
        <p>All Fragrance</p>
        <p>Body Spray & Mists</p>
        <p>Perfumes & Cologne</p>
      </div>
      <div>
        <h5>AROMATHERAPY</h5>
        <p>All Aromatherapy</p>
        <p>Body Wash & Shower Gel</p>
        <p>Moisturizers</p>
        <p>Mist & Sprays</p>
      </div>
      <div>
        <h5>FEATURED</h5>
        <p>Retired Fragrance</p>
        <p>Travel Size</p>
      </div>
    </div>
  );
};
