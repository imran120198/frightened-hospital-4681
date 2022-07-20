import React, { Component } from "react";
import Slider from "react-slick";
import { TodaysTopOfferSlider } from "../../API/HomePageApi";
import { Link } from "react-router-dom";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="w-[1000px] m-auto p-[45px]">
        <Slider {...settings}>
          {TodaysTopOfferSlider.map((offers) => {
            return (
              <div key={offers.id}>
                <div className="mx-2 h-[300px] bg-white">
                  <div className="mt-2 h-[55px]">
                    <h1
                      className="text-center font-bold text-xl text-black font-sans"
                      style={{ color: "#005699" }}
                    >
                      {offers.offerName}
                    </h1>
                  </div>
                  <div className=" mt-2 h-[50px]">
                    <p className="text-center">{offers.pName}</p>{" "}
                  </div>
                  <div className=" mt-2 h-[65px]">
                    <h1 className="text-center text-black font-semibold text-2xl">
                      {offers.discount}
                    </h1>
                  </div>
                  <div className=" mt-2 h-[25px]">
                    <p className="text-center text-black font-sans">
                      {offers.limit}
                    </p>
                  </div>
                  <div className=" m-2 h-[50px]">
                    <Link to={offers.link}>
                      <button
                        className=" text-white bg-[#333333] w-full h-full text-2xl font-semibold hover:text-[#333333] hover:bg-[#e5e5e5]"
                        style={{ transition: ".4s ease-in" }}
                      >
                        SHOP
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}