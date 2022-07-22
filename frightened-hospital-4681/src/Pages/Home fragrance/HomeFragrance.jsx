import React, { useState } from "react";
import "../Home fragrance/HomeFragrance.css";
import { fragrance } from "./FragranceDetails";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Categories from "../../Components/Categoris/Categories";

const HomeFragrance = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("proDesc", JSON.stringify(e));
    navigate("/productDetail");
  };
  const [data, setData] = useState(fragrance);

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
      <div className="flex h-fit justify-between">
        <div className="anTop">
          <h2 className="anTit">Home Fragrance</h2>
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
            <p>5/$25 Wallflowers Fragrance Rfills</p>
            <p>3/$22 Room Sprays</p>
            <p>3/$10 Car Fragrance Refills</p>
          </div>
          <div>
            <h5>ALL FRESHNERS</h5>
            <p>All Wallflowers</p>
            <p>Wallflowers Plugs</p>
            <p>Room Sprays & Mists</p>
            <p>Car Fragrance</p>
          </div>
          <div>
            <h5>FEATURED</h5>
            <p>Auto Refresh Wallflowers</p>
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

export default HomeFragrance;
