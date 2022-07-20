import React from "react";
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
        <Link to={"/topoffers"} />
        TOP OFFERS
      </div>
      <div>
        <Link to={"/topoffers"} />
        BODY CARE
      </div>
      <div>
        <Link to={"/topoffers"} />
        CANDLES
      </div>
      <div>
        <Link to={"/topoffers"} />
        HOME FRAGRANCES
      </div>
      <div>
        <Link to={"/topoffers"} />
        HAND SOAPS & SANITIZERS
      </div>
      <div>
        <Link to={"/topoffers"} />
        MEN'S
      </div>
      <div>
        <Link to={"/topoffers"} />
        GIFTS
      </div>
      <div>
        <Link to={"/topoffers"} />
        NEW & NOW
      </div>
    </div>
  );
};

export default Categories;
