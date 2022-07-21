import React from "react";
import styles from "../Footer/Footer.module.css";
import "../Footer/FooterH.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";

const Footer = () => {
  return (
    <div className={styles.footerAt}>
      <hr style={{ margin: "80px 0px 35px 0px" }} />
      <div className={styles.footer_upAt}>
        <div>
          <p
            style={{
              padding: "0px 20px 15px 0px",
              // paddingTop: "5px",
              // fontSize: "15px",
            }}
          >
            Get email offers & the latest news from Bath & Body Works!
          </p>
          <p style={{ paddingBottom: "0px" }}>Enter Email</p>
          <input
            style={{
              height: "35px",
              border: "1px solid rgb(92, 83, 83)",
              marginBottom: "15px",
              outline: "none",
            }}
          />
          <div className="w-[30px] h-[30px] rounded-full absolute top-[4710px] right-[1136px] infoBox">
            <i
              className="bx bxs-info-circle cursor-pointer text-[#666666] hover:text-black"
              style={{ fontSize: "30px" }}
            ></i>
            <div className="border border-black w-[250px] h-[250px] absolute top-[-260px] infoBoxHover p-4">
              <div className="h-[fit-content] leading-8">
                <h1 className="text-[.75rem] font-sans font-bold">
                  BATH & BODY WORKS DIRECT, INC.
                </h1>
              </div>
              <div className="h-[fit-content]">
                <h3 className="text-[#666]">
                  95 West Main Street,
                  <br />
                  New Albany, OH 43054
                  <br />
                  <span>1-800-756-5005</span>
                </h3>
              </div>
              <div className="h-[fit-content] mt-3">
                <h3 className="text-[#666]">
                  You may withdraw your consent at anytime. View Privacy Policy.
                </h3>
              </div>
              <div className="h-[fit-content] mt-2">
                <p className="text-[#666] underline">Contact Us</p>
              </div>
            </div>
          </div>
          <p style={{ paddingBottom: "-5px" }}>Confirm Email</p>
          <input
            style={{
              height: "35px",
              border: "1px solid black",
              outline: "none",
            }}
          />
          <button className={styles.btnAt}>SUBMIT</button>
          <h5 className={styles.h5TagAt} style={{ marginTop: "10px" }}>
            GET CONNECTED
          </h5>
        </div>
        <div>
          <h5 className={styles.h5TagAt}>CUSTOMER CARE</h5>
          <Link to={"/faq"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Help & FAQs</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>
                Live Chat 8a - 12a ET
              </span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Shipping</span>
            </p>
          </Link>
          <Link to={"/"}>
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>
                Returns & Exchanges
              </span>
            </p>
          </Link>
          <Link to={"/"}>
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Order Tracking</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>
                Corporate Sales & Gifts
              </span>
            </p>
          </Link>
          <Link to={"/contact"}>
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Contact Us</span>
            </p>
          </Link>
        </div>
        <div>
          <h5 className={styles.h5TagAt}>MY ACCOUNT</h5>
          <p style={{ marginTop: "3px" }}>
            <Link to={"/account"}>
              <span className={styles.footer_upATagAt}>Sign In or Sign Up</span>
            </Link>
          </p>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Order Tracking</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>My Auto Refresh</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>My Love-It List</span>
            </p>
          </Link>
        </div>
        <div>
          <h5 className={styles.h5TagAt}>DISCOVER</h5>
          <Link to={"/about-us"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>About Us</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Careers</span>
            </p>
          </Link>
          <Link to={"/"}>
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Gift Cards</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Shop by Fragrance</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>
                Product Ingredients
              </span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Get Inspired</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>
                Diversity, Equity & Inclusion
              </span>
            </p>
          </Link>
        </div>
        <div>
          <h5 className={styles.h5TagAt}>FIND US</h5>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Store Locator</span>
            </p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p style={{ marginTop: "3px" }}>
              <span className={styles.footer_upATagAt}>Global Locations</span>
            </p>
          </Link>
        </div>
      </div>

      {/* <social media section */}
      <div className={styles.footer_midAt}>
        <div className={styles.socialmedia}>
          <div>
            <a href="https://www.facebook.com/bathandbodyworks">
              <img
                className={styles.social}
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-2019-1597680-1350125.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/bathbodyworks">
              <img
                className={styles.social}
                src="https://cdn.iconscout.com/icon/free/png-64/twitter-53-189787.png"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/bathandbodyworks/">
              <img
                className={styles.social}
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-1868978-1583142.png"
              />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@bathandbodyworks">
              <img
                className={styles.social}
                src="https://cdn.iconscout.com/icon/free/png-64/tiktok-3185106-2661848.png"
              />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/user/bathandbodyworks/">
              <img
                className={styles.social}
                src="https://cdn.iconscout.com/icon/free/png-64/youtube-42-72551.png"
              />
            </a>
          </div>
          <div>
            <a href="https://www.pinterest.com/bathbodyworks/">
              <img
                className={styles.social}
                src="https://cdn.iconscout.com/icon/free/png-64/pinterest-46-189745.png"
              />
            </a>
          </div>
        </div>

        {/* <social media section end */}
        <Link to={"/"}>
          {" "}
          <p style={{ marginBottom: "35px" }}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
              alt=""
              style={{ width: "420px", height: "108px", paddingTop: "-100px" }}
            />
          </p>
        </Link>
      </div>
      <div className={styles.footer_dnAt}>
        <div style={{ padding: "20px 0px 20px 0px" }}>
          <Link to={"/"}>
            <p className={styles.underline_hoverAt}>Terms Of Use</p>
          </Link>
          <span>|</span>
          <Link to={"/"}>
            {" "}
            <p className={styles.underline_hoverAt}>Privacy Policy</p>
          </Link>
          <span>|</span>
          <Link to={"/"}>
            {" "}
            <p className={styles.underline_hoverAt}>Security Bug Report</p>
          </Link>
          <span>|</span>
          <Link to={"/"}>
            <p className={styles.underline_hoverAt}>
              California Privacy Rights
            </p>
          </Link>
          <span>|</span>
          <Link to={"/"}>
            {" "}
            <p className={styles.underline_hoverAt}>
              Do Not Sell My Personal Information (California)
            </p>
          </Link>
          <span>|</span>
          <Link to={"/"}>
            <p className={styles.underline_hoverAt}>
              Transparency in Supply Chains
            </p>
          </Link>
          <span>|</span>
          <Link to={"/"}>
            {" "}
            <p className={styles.underline_hoverAt}>Ad Preferences</p>
          </Link>
        </div>
        <div style={{ marginTop: "-35px" }}>
          © 2022 Bath & Body Works Direct, Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
