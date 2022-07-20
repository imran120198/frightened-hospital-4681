import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.module.css";
import { LastLandingPageSlider } from "../../API/HomePageApi";

export default class MultipleItemsTwo extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="w-[1000px] m-auto p-[15px]">
        <Slider {...settings}>
          {LastLandingPageSlider.map((endslider) => {
            return (
              <div key={endslider.id}>
                <div className="mx-[60px] h-[300px]">
                  <div className="w-[224px] h-[224px]">
                    <img src={endslider.src} alt="" />
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
