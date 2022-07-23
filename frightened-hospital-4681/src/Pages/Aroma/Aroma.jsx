import React, { useState } from "react";
import "../Aroma/aroma.css";
import { aroma_soap } from "./aroma_soap.js";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Categories from "../../Components/Categoris/Categories";
import Footer from "../../Components/Footer/Footer";

const Aroma = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("proDesc", JSON.stringify(e));
    navigate("/productDetail");
  };

  const [adata, setAdata] = useState(aroma_soap);

  const handleChange = (e) => {
    const anewData = adata.sort((a, b) => {
      if (e.target.value === "lth") {
        return a.Amount - b.Amount;
      } else if (e.target.value === "htl") {
        return b.Amount - a.Amount;
      } else {
        return b.Rating - a.Rating;
      }
    });
    setAdata([...anewData]);
  };

  return (
    <>
      <Navbar />
      <div
        className="flex h-fit justify-between"
        style={{
          border: "2px solid black",
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <div className="anTop">
          <h2 className="anTit">New & Now</h2>
        </div>
      </div>

      {/* Sorting and Filteration */}
      <div className="anSort">
        <select className="anSortBox cursor-pointer" onChange={handleChange}>
          <option value="sortby">SORT BY</option>
          <option value="top">Top Seller</option>
          <option value="lth">Price Low to High</option>
          <option value="htl">Price High to Low</option>
        </select>
        {/* onClick={handelClick} */}
      </div>

      {/* Cards */}
      <div style={{ display: "flex" }}>
        <div className="sidebar">
          {/* <Sidebar /> */}
          <div>
            <h5>NEW & NOW</h5>
            <p>New Arrivals</p>
            <p>Aromatherapy Shops</p>
            <p>Fall Collection</p>
            <p>Halloween</p>
            <p>Best Sellers</p>
            <p>Get Inspired</p>
            <p>Shop by Fragrance</p>
            
          </div>
          
        </div>
        <div className="anMainCard">
          {adata.map((item) => {
            return (
              <div className="anCard" key={item.id}>
                <center>
                  <img
                    style={{ height: "200px" }}
                    src={item.pImg}
                    alt="Image"
                  />
                  <br />
                  <b className="anBold">{item.category}</b>
                  <br />
                  <b>{item.name}</b>
                  <h4 className="anCat1">{item.category1}</h4>
                  <br />
                  <h2 className="anAmount">${item.Amount}</h2>
                  <button onClick={() => handleClick(item)} className="anButn">
                    ADD TO BAG
                  </button>
                  <h2>⭐⭐⭐⭐ ({item.Rating})</h2>
                </center>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aroma;
