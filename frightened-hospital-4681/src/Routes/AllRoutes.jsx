import React from "react";
import Categories from "../Components/Categoris/Categories";
import CatNavbar from "../Components/Categoris/CatNavbar";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      {/* <CatNavbar /> */}
      <Categories />
      <Home />
    </div>
  );
};

export default AllRoutes;
