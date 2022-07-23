import React from "react";
import { Route, Routes } from "react-router-dom";
import { ALLShop_body } from "../Pages/Body Care/Shop_body";
import { Candle } from "../Pages/Candles/Candle";
import HomeFragrance from "../Pages/Home fragrance/HomeFragrance";
import Home from "../Pages/Home/Home";
import TopOffer from "../Pages/Top Offers/TopOffers";
import AllHandSoaps from "../Pages/Hand/Hand";
import Gift from "../Pages/Gift/Gift";
import Aroma from "../Pages/Aroma/Aroma";
import Cart from "../Pages/Cart";
import Description from "../Pages/Description";
import PaypalShippingDetails from "../Pages/PaypalShippingDetails";
import CodShippingdetails from "../Pages/Codshippingdetails";
import SignUPSignIn from "../Components/Signin/SignUpSignIn";
import PaymentSuccess from "../Pages/PaymentSuccess";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topoffers" element={<TopOffer />} />
        <Route path="/bodycare" element={<ALLShop_body />} />
        <Route path="/candle" element={<Candle />} />
        <Route path="/fragrance" element={<HomeFragrance />} />
        <Route path="/soaps" element={<AllHandSoaps />} />
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Gift />} />
        <Route path="/newandnow" element={<Aroma />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetail" element={<Description />} />
        <Route path="/paypal" element={<PaypalShippingDetails />} />
        <Route path="/cod" element={<CodShippingdetails />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/account" element={<SignUPSignIn />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
