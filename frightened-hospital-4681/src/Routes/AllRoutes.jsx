import React from "react";
import Categories from "../Components/Categoris/Categories";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import TopOffer from "../Pages/Top Offers/TopOffers";
import { ALLShop_body } from "../Pages/Body Care/Shop_body";
import { Sidebar } from "../Components/SideBar/Sidebar";

const AllRoutes = () => {
  return (
    <div>
      {/* <Navbar />
      <Categories />
      <Home />
      <Footer/> */}
      {/* <TopOffer/> */}
      <ALLShop_body />
    </div>
  );
};

export default AllRoutes;
