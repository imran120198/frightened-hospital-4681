import React, { useState } from "react";
import "../Gift/gift.css";
import { gift_set } from "./gift_set";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Categories from "../../Components/Categoris/Categories";
import Footer from "../../Components/Footer/Footer";

const Gift = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("proDesc", JSON.stringify(e));
    navigate("/productDetail");
  };
  const [data, setData] = useState(gift_set);

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
  };

  return (
    <>
      <Navbar />
      <Categories />
      {/* Top of the page */}
      <div
        style={{
          border: "2px solid black",
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
        }}
      >
        <div className="anTop">
          <h2 className="anTit">Gifts</h2>
        </div>
      </div>

      {/* Sorting and Filteration */}
      <div className="anSort">
        <select className="anSortBox" onChange={handleChange}>
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
            <h5>FEATURED</h5>
            <p>Gift Sets</p>
          </div>
          <div>
            <h5>GIFTS BY PRICE</h5>
            <p>$15 & Under Gifts</p>
            <p>$30 & Under Gifts</p>
            <p>$50 & Under Gifts</p>
          </div>
          <div>
            <h5>GIFT BY RECIPIENT</h5>
            <p>Gifts for Her</p>
            <p>Gifts for Him</p>
            <p>Gifts for Everyone</p>
            <p>Gifts for Hostess</p>
          </div>
          <div>
            <h5>COLLECTION</h5>
            <p>Gifts Boxs & Bags</p>
            <p>Accessories</p>
          </div>
          <div>
            <h5>GIFTS CARDS</h5>
            <p>E-Gift Cards</p>
            <p>Gift Cards</p>
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
                  <b>{item.name}</b>
                  <h4 className="anCat1">{item.category1}</h4>
                  <br />
                  <h2 className="anAmount">${item.Amount}</h2>
                  <button onClick={() => handleClick(item)} className="anBtn">
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

export default Gift;
