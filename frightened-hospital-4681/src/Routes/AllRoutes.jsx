import React from "react";
import Categories from "../Components/Categoris/Categories";
import CatNavbar from "../Components/Categoris/CatNavbar";
import Navbar from "../Components/Navbar/Navbar";
import TopSlider from "../Pages/Carousel/TopSlider";
import Home from "../Pages/Home/Home";
import MultipleItems from "../Pages/Carousel/TopSlider";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Home />
      {/* <CatNavbar /> */}
      
    </div>
  );
};

export default AllRoutes;
