import React from "react";
import Categories from "../Components/Categoris/Categories";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import TopOffer from "../Pages/Top Offers/TopOffers";
import { ALLShop_body } from "../Pages/Body Care/Shop_body";
import { Sidebar } from "../Components/SideBar/Sidebar";
import { Candle } from "../Pages/Candles/Candle";
import HomeFragrance from "../Pages/Home fragrance/HomeFragrance";
import AllHandSoaps from "../Pages/Hand/Hand";
import Gift from "../Pages/Gift/Gift";
import Aroma from "../Pages/Aroma/Aroma";

const AllRoutes = () => {
  return (
    <div>
      {/* <Navbar />
      <Categories />
      <Home />
      <Footer/> */}
      {/* <TopOffer/> */}
      {/* <ALLShop_body /> */}
      {/* <Candle /> */}
      {/* <HomeFragrance /> */}
      {/* <AllHandSoaps /> */}
      {/* <Gift/> */}
      <Aroma />
    </div>
  );
};

export default AllRoutes;
