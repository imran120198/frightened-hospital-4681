import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../DeviceView/MyAccount.css";
import "../../DeviceView/LandingRes.css";
import styles from "./Navbar.module.css";
import location_on from "../../assets/UpperNavbar/location_on.svg";
import { CartContext } from "../../Context/CartProvider";
import shopping_bag from "../../assets/shopping_bag.svg";

const Navbar = () => {
  const cart = useContext(CartContext);

  const navigate = useNavigate();
  let UserInfo = JSON.parse(localStorage.getItem("userData")) || [];
  let [userName] = useState(UserInfo.fName);
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/account");
  };
  return (
    <div className={styles.navbar}>
      {/* --------UPPER NAVBAR-------- */}

      <div className={styles.uppernavbar}>
        <div className={styles.uppernavbar_div}>
          <img src={location_on} alt="location" />
          <a href="#">PICK UP IN STORE</a>
          <a href="#">Set Store</a>
        </div>
      </div>

      {/* ---------MIDDLE NAVBAR-------- */}

      <div className={styles.middlenavbar}>
        <div>
          <Link to={"/"}>
            <img
              className={styles.logo}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwe188b42c/images/svg-icons/Logos-main.svg?yocs=o_s_"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <input placeholder="Search by fragnance or Product..." />
        </div>

        {/* -----account and cart------- */}
        <div className="w-[50px] h-[45px] rounded-full MyAccount">
          <img
            className="w-[50px] h-[45px] cursor-pointer"
            id="accImg"
            src="https://www.bathandbodyworks.com/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc847d762/images/svg-icons/UI-MyAccount.svg"
            alt="account"
          />
          <div className="divAccHover">
            <Link to={"/account"}>
              <div className="h-[fit-content]  mt-2 w-fit">
                <h1 className="leading-8 px-2 text-[13px] text-[#666]">
                  {userName ? userName : "Sign In or Sign Up"}
                </h1>
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className="h-[fit-content] w-fit">
                <h1 className="leading-8 px-2 text-[13px] text-[#666]">
                  Order Tracking
                </h1>
              </div>
            </Link>
            <Link to={"/cart"}>
              <div className="h-[fit-content] w-fit">
                <h1 className="leading-8 px-2 text-[13px] text-[#666]">
                  My Auto Refresh
                </h1>
              </div>
            </Link>
            <Link to={"/cart"}>
              {" "}
              <div className="h-[fit-content] w-fit">
                <h1 className="leading-8 px-2 text-[13px] text-[#666]">
                  My Love-It List
                </h1>
              </div>
            </Link>
            <div className="h-[fit-content] w-fit">
              <h1
                onClick={handleLogout}
                className="leading-8 px-2 text-[13px] text-[#666] cursor-pointer"
              >
                {userName ? "Logout" : ""}
              </h1>
            </div>
          </div>
          <div className={styles.cart}>
            <img src={shopping_bag} alt="shopping bag"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
