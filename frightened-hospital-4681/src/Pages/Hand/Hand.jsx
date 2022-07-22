import React, { useState } from "react";
import "../Hand/Hand.css";
import { shop_hand_soap } from "./hand_soap";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Categories from "../../Components/Categoris/Categories";
import Footer from "../../Components/Footer/Footer";

const AllHandSoaps = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("proDesc", JSON.stringify(e));
    navigate("/productDetail");
  };

  const [data, setData] = useState(shop_hand_soap);

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
          border: "2px solid black",
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <div className="anTop">
          <h2 className="anTit">Hand Soaps & Sanitizer</h2>
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
            <p>5/$25 Hand Soaps</p>
            <p>$8 Hand Sanitizers 5-Packs</p>
            <p>3/$5 Hand Sanitizer Sprays</p>
          </div>
          <div>
            <h5>HAND SOAPS</h5>
            <p>All Hand Soaps</p>
            <p>Foaming Soaps</p>
            <p>Gel Soaps</p>
            <p>Soap Holders</p>
          </div>
          <div>
            <h5>HAND SANITIZERS</h5>
            <p>All Hand Sanitizers</p>
            <p>PocketBac Hand Sanitizers</p>
            <p>Hand Sanitizers Sprays</p>
            <p>Full-Size Sanitizers</p>
            <p>Hand Sanitizer Holders</p>
          </div>
          <div>
            <h5>FEATURED</h5>
            <p>Gente & Clean Hand Soaps</p>
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
    </div>
  );
};

export default AllHandSoaps;
