import React, { useState } from "react";
import styles from "./Home.module.css";
import "../../DeviceView/WebScroll.css";
import MultipleItems from "./TopSlider";
import MultipleItemsTwo from "./TopSlider2";
import { Link } from "react-router-dom";
import first from "../../assets/first.gif";
import { ArShopByCat, MoreGoodThings } from "../../API/HomePageApi";

const Home = () => {
  return (
    <div className={styles.main}>
      {/* section 1 */}
      <section className={styles.firstSection}>
        <div>
          <img src={first} alt="banner1" />
        </div>
      </section>
      {/* section 1 end*/}
      <br />
      <br />
      <br />
      {/* Section 2 */}
      <section className={styles.secondSection}>
        <div>
          <h1>TODAY'S TOP OFFERS</h1>
        </div>
        <div className={styles.secondSection_2div}>
          <MultipleItems></MultipleItems>
        </div>
      </section>
      {/* Section 2 end */}
      <br />
      <br />
      {/* section 3 */}
      <section className=" h-[fit-content] w-[500px] m-auto">
        <div className=" h-[25px]">
          <h3 className="text-center font-sans text-[#333333] font-semibold text-xl leading-4">
            Limited time only! Online only!
          </h3>
        </div>
        <div className=" h-[fit-content]">
          <h1 className="text-center font-sans text-[#333333] font-bold text-2xl mt-2">
            Spring gift bundle
          </h1>
        </div>
        <div className=" h-[35px]">
          <p className="text-center text-[#666666] leading-8 mt-3">
            Give a little (or a lot) to allllll the moms...
          </p>
        </div>
        <div className=" h-[55px] w-[130px] m-auto">
          <Link to={"/gift-sets"}>
            <button
              className=" w-full h-full font-bold text-[#333333] bg-[#e5e5e5] mt-2 hover:text-white hover:bg-[#333333]"
              style={{ fontSize: "16px", transition: ".3s ease-in" }}
            >
              SHOP
            </button>
          </Link>
        </div>
      </section>
      {/* section 3 end */}
      <br />
      <br />
      {/* section 4 */}
      <section className="h-[fit-content] flex">
        <div className="h-[488.25px] w-[868px] ml-[200px] border-dotted border-2 border-gray-500">
          <img
            className="cursor-pointer"
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f646ce5/images/Spring2022/oo-pwp-sp3-atb-lto.jpg?yocs=o_s_"
            alt="banner_2"
          />
        </div>
        <div className="w-[300px]">
          <div className="mt-[50px] w-[144px] h-[195px] m-auto imgChange">
            <img
              className="cursor-pointer"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5e7830a6/crop/025144398_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
              alt="productFront"
            />
            <img
              className="cursor-pointer w-[144px] h-[195px]"
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw57c95821/hires/025144398_alt_1.jpg?sh=413&yocs=o_s_"
              alt="productBack"
            />
          </div>
          <div className="m-auto w-[144px] h-fit">
            <h3
              className="text-center font-sans font-bold text-[14px]"
              style={{ letterSpacing: ".005em", color: "#005699" }}
            >
              New!
            </h3>
          </div>
          <div className="m-auto w-[144px] h-[25px]">
            <h2
              className="text-center font-sans font-bold transform-none text-[14px]"
              style={{ letterSpacing: ".005em" }}
            >
              Limited Edition
            </h2>
          </div>
          <div className="m-auto w-[144px] h-fit">
            <p className="text-center text-[12px] text-[#666666] font-medium font-sans">
              Spring Gift Bundle
            </p>
          </div>
          <div className="m-auto w-[144px] h-[25px]">
            <h3 className="text-center text-[14px] font-sans font-bold">
              $112.00
            </h3>
          </div>
          <div className="m-auto w-[144px] h-fit">
            <p className="text-center text-[12px] font-sans text-[#CC0000]">
              $40 Gift with $40 Purchase
            </p>
          </div>
          <div className="m-auto w-[270px] mt-3 h-[55px]">
            <Link to={"/gift-sets"}>
              {" "}
              <button
                className="w-full h-full font-bold text-white bg-[#333333] hover:text-black hover:bg-[#e5e5e5]"
                style={{ fontSize: "16px", transition: ".3s ease-in" }}
              >
                SHOP NOW
              </button>{" "}
            </Link>
          </div>
        </div>
      </section>
      {/* section 4 ends */}
      <br />
      <br />
      {/* section 5 */}
      <section className="w-[1168px] h-[657px] m-auto border-dotted border-2 border-gray-500">
        <img
          className="w-[1168px] h-[657px] cursor-pointer"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw377d7fac/images/Spring2022/diff_mday_sp3_hm.jpg?yocs=s_"
          alt="banner3"
        />
      </section>
      {/* section 5 end */}
      <br />
      <br />
      {/* section 6 */}
      <section className="w-[fit-content] m-auto h-[300px]">
        <div className="p-[20px]">
          <h1 className="text-center font-sans text-[#333333] font-bold text-[24px]">
            SHOP BY CATEGORY
          </h1>
        </div>
        <div className="h-[220px] flex items-center justify-center gap-[35px]">
          {ArShopByCat.map((cat) => {
            return (
              <div key={cat.id}>
                <div className="w-[168px] h-[200px]">
                  <div className="h-[168px]">
                    <img className="cursor-pointer" src={cat.catImg} alt="" />
                  </div>
                  <div className="h-[30px] p-1">
                    <Link to={cat.link}>
                      <h1 className="text-center font-sans font-semibold text-[14px] text-[#333333] underline">
                        {cat.catTitle}
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* section 6 ends */}
      <br />
      <br />
      {/* section 7 */}
      <section className="border-dotted border-2 border-gray-500 w-[1168px] h-[328.5px] m-auto">
        <img
          className="cursor-pointer"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2106374d/images/Spring2022/xcat_give-love-mday_sp3_hb.jpg?yocs=s_"
          alt="banner_4"
        />
      </section>
      {/* section 7 ends */}
      <br />
      <br />
      {/* section 8 */}
      <section className="w-[1168px] h-[300px] m-auto">
        <div className="p-[20px]">
          <h1 className="text-center font-sans text-[#333333] font-bold text-[24px]">
            MORE GOOD THINGS, THIS WAY
          </h1>
        </div>
        <div className="h-[220px] flex items-center justify-center gap-[35px]">
          {MoreGoodThings.map((moreGood) => {
            return (
              <div key={moreGood.id}>
                <div className="w-[168px] h-[200px]">
                  <div className="h-[165px]">
                    <img className="cursor-pointer" src={moreGood.src} alt="" />
                  </div>
                  <div className="h-[35px]">
                    <Link to={moreGood.link}>
                      <h1 className="text-center font-sans font-semibold text-[14px] text-[#333333] underline">
                        {moreGood.title}
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* section 8 ends */}
      <br />
      {/* section 9 */}
      <section className="w-[1196px] h-[308px] m-auto">
        <div>{/* <img src={} alt="" /> */}</div>
        <div className="h-[225px]">
          <MultipleItemsTwo></MultipleItemsTwo>
        </div>
      </section>
      {/* section 9 ends */}
      <br />
      {/* section 10 */}
      <section className="w-[1164px] m-auto">
        <div className="p-[20px]">
          <h1 className="text-[28px] text-[#333333] text-center">
            Bath & Body Works
          </h1>
        </div>
        <div className="w-[800px] h-[fit-content] m-auto">
          <p className="text-center text-[16px] text-[#666666] leading-7">
            Bath and Body Works is your go-to place for gifts & goodies that
            surprise & delight. From fresh fragrances to soothing skin care, we
            make finding your perfect something special a happy-memory-making
            experience. Searching for new seasonal creations or your favorite
            discontinued scents? We’ve got you covered there, too. Oh! And while
            you're browsing, shop our latest & greatest selection of lotions,
            soaps and candles!
          </p>
        </div>
      </section>
      {/* section 10 ends */}
    </div>
  );
};

export default Home;
