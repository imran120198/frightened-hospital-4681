import React, { useState } from "react";
import "./first.css";
import { shop_body } from "./firstshop";
import Navbar from "../../Components/Navbar/Navbar";
import Categories from "../../Components/Categoris/Categories";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../Components/SideBar/Sidebar";

export const ALLShop_body = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    localStorage.setItem("proDesc", JSON.stringify(e));
    navigate("/productDetail");
  };
  const [data, setData] = useState(shop_body);

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
          <h2 className="anTit">All Body Care</h2>
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
      <div style={{display:"flex"}}>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="anMainCard">
          {data.map((item) => {
            return (
              <div className="anCard" key={item.id}>
                <center>
                  <img
                    style={{ height: "200px",width:"40%" }}
                    src={item.pImg}
                    alt="Image"
                  />
                  <br />
                  <b className="anBold">{item.category}</b>
                  <br />
                  <b style={{marginBottom:"20px"}}>{item.name}</b>
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
