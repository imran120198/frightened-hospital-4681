import React, { useState } from "react";
import "../Candles/candle1.css";
import { shop_candle } from "./Shop_candles";
import Navbar from "../../Components/Navbar/Navbar";
import Categories from "../../Components/Categoris/Categories";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export const Candle = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("proDesc", JSON.stringify(e));
    navigate("/productDetail");
  };
  const [data, setData] = useState(shop_candle);

  const handleChange = (e) => {
    const newData = data.sort((a, b) => {
      if (e.target.value === "lth") {
        return a.Amount - b.Amount;
      } else if (e.target.value === "htl") {
        return b.Amount - a.Amount;
      } else {
        return b.Rating - a.Rating;
      }
    });
    setData([...newData]);
    // console.log('newData:', newData)
  };

  return (
    <div>
      <Navbar />
      <Categories />
      {/* Top of the page */}
      <div
        className="flex h-fit justify-between"
        style={{
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <div className="anTop">
          <h2 className="anTit">All Candles</h2>
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
            <h5>TOP OFFERS</h5>
            <p>$13.50 All 3-Wick Candles</p>
            <p>2/$22 Single Wick Candles</p>
          </div>
          <div>
            <h5>ALL CANDLES</h5>
            <p>3-Wick Candles</p>
            <p>Single Wick Candles</p>
            <p>Candle Holder & Accessories</p>
          </div>
          <div>
            <h5>FEATURED</h5>
            <p>The White Barn Shop</p>
          </div>
        </div>
        <div className="anMainCard">
          {data.map((item) => {
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
                    VIEW
                  </button>
                  <h2>⭐⭐⭐⭐ ({item.Rating})</h2>
                </center>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
