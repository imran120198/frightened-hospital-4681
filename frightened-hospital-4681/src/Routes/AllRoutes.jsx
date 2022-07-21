import React from "react";
import Categories from "../Components/Categoris/Categories";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Home />
      <Footer/>
      
    </div>
  );
};

export default AllRoutes;
