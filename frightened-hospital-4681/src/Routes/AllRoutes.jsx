import React from "react";
import Categories from "../Components/Categoris/Categories";
import CatNavbar from "../Components/Categoris/CatNavbar";
import Navbar from "../Components/Navbar/Navbar";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      {/* <CatNavbar /> */}
      <Categories />
    </div>
  );
};

export default AllRoutes;
