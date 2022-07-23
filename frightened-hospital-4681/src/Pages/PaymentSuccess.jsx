import React from "react";
import box from "../assets/Images/box.PNG";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const PaymentSuccess = () => {
  return (
    <div>
      <Navbar />
      <section className="m-auto border h-[500px] bg-[#ccf0d2]">
        <div style={{ marginTop: "20px" }}>
          <div>
            <img src={box} alt="" />
          </div>
          <div className="border border-red-500 h-fit w-[300px] mt-6 rounded-[20px] p-5 bg-white">
            <h1>
              Thanks for purchasing from Bath & Body Works. Your Order has
              been Created Successfully.
              <br /> and will be delieverd in 7 working days
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
