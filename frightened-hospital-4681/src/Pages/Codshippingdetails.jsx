import React, { useState } from "react";
import fontimg from "../assets/Images/fontimg.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const CodShippingDetails = () => {
  const navigate = useNavigate();

  const handeSubmit = (e) => {
    e.preventDefault();
    navigate("/payment-success");
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="h-[fit-content] p-2">
          <h1 className="text-center font-bold text-[25px] text-[#666666] underline">
            ADD SHIPPING DETAILS
          </h1>
        </div>
      </div>

      {/* sipping details */}
      <div
        style={{
          width: "70%",
          margin: "auto",
          textAlign: "left",
        }}
      >
        <form>
          <label
            style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
          >
            NAME
          </label>
          <input
            type="text"
            required
            style={{
              border: "1px solid black",
              width: "500px",
              height: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <br />
          <br />
          <label
            style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
          >
            E-MAIL
          </label>
          <input
            type="e-mail"
            required
            style={{
              border: "1px solid black",
              width: "500px",
              height: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <br />
          <br />
          <label
            style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
          >
            MOBILE NUMBER
          </label>
          <input
            type="number"
            required
            style={{
              border: "1px solid black",
              width: "500px",
              height: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <br />
          <br />
          <label
            style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
          >
            COUNTRY
          </label>
          <select
            name="Select Country"
            style={{
              border: "1px solid black",
              width: "500px",
              height: "50px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <option>Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>Canada</option>
          </select>
          <br />
          <br />
          <label
            style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
          >
            Street Address
          </label>
          <input
            type="text"
            required
            style={{
              border: "1px solid black",
              width: "500px",
              height: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <br />
          <br />
          <label
            style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
          >
            City
          </label>
          <input
            type="text"
            required
            style={{
              border: "1px solid black",
              width: "500px",
              height: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <br />
          <br />
          <label
            style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
          >
            State
          </label>
          <input
            type="text"
            required
            style={{
              border: "1px solid black",
              width: "500px",
              height: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <br />
          <br />
          <label
            style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}
          >
            Pin Code
          </label>
          <input
            type="text"
            required
            style={{
              border: "1px solid black",
              width: "500px",
              height: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <br />
          <br />
        </form>
      </div>

      <div className="h-[fit-content] w-[fit-content] m-auto absolute top-[1180px] right-[600px] rounded-[20px] p-3">
        <div className="rounded-[20px] h-[fit-content] w-fit m-auto">
          <h1 className="text-center font-bold text-[20px] text-[white]">
            <button
              onClick={handeSubmit}
              style={{
                border: "2px solid black",
                backgroundColor: "black",
                color: "white",
                width: "200px",
                height: "50px",
                fontSize: "20px",
                padding: "auto",
              }}
            >
              PAY
            </button>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CodShippingDetails;
