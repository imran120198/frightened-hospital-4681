import React, { useState } from "react";
import styles from "./Home.module.css";
import "../../DeviceView/WebScroll.css";
import { Link } from "react-router-dom";
import first from "../../assets/first.gif";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        {/* section 1 */}
        <section className={styles.firstSection}>
          <div>
            <Link to="/">
              <img src={first} alt="banner1" />
            </Link>
          </div>
        </section>
        {/* section 1 end*/}
        <br />
        <br />
        <br />

        {/* section 2 start */}
        <div className={styles.secondSection}>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfd31720e/images/Summer2022/xcat_halloween_su3_hb.jpg?yocs=s_"
            alt="banner1"
          />
        </div>
        {/* section 2 end */}
        <br />
        <br />
        <br />

        {/* section 3 start */}
        <div>
          <Link to="/wildflower">
            <img
              className={styles.thirdsection}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw61a0fa39/images/Summer2022/diff_halloween_su3_hm_v2.jpg?yocs=s_"
              alt="banner2"
            />
          </Link>
        </div>
        {/* section 3 end */}

        <br />
        <br />
        {/* section 4 start */}
        <div className={styles.foursection}>
          <div>
            <h2>SHOP BY CATEGORY</h2>
          </div>
          <div className={styles.fourSubsection}>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc5ed4c78/images/Summer2022/fbc_poppy_su3_vn.jpg?yocs=o_s_"
                alt="bodycare"
              />
              <Link to="/bodycare">Body Care</Link>
            </div>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb2954ee6/images/Summer2022/cndl_phytogaia_su3_vn.jpg?yocs=o_s_"
                alt="candle"
              />
              <Link to="/candle">Candle</Link>
            </div>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb4498177/images/Summer2022/diff_bts_su3_vn.jpg?yocs=o_s_"
                alt="wallflower"
              />
              <Link to="/wallflower">Wallflower</Link>
            </div>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8ab0ee58/images/Summer2022/sp_meadow_su3_vn.jpg?yocs=o_s_"
                alt="handsoaps"
              />
              <Link to="/handsoaps">Hand Soaps</Link>
            </div>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw556bcddf/images/Spring2022/obc_atviznav_0_sp1_vn.jpg?yocs=o_s_"
                alt="aromatherapy"
              />
              <Link to="/aromatherapy">Aromatherapy</Link>
            </div>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwd1fd2fb9/images/Summer2022/obc_mens-shop-fday_su1_vn.jpg?yocs=o_s_"
                alt="mens"
              />
              <Link to="/mens">Shop Men's</Link>
            </div>
          </div>
        </div>
        {/* section 4 end */}

        {/* section 5 start */}
        <div className={styles.fivesection}>
          <h2>Fall preview must-haves!</h2>
          <p>Bring that little-bit-of-fall feeling to every room and routine</p>
          <button>SHOP NEW ARRIVALS</button>
        </div>
        {/* section 5 end */}

        {/* section 6 start */}

        <div className={styles.sixsection}>
          <div>
            <Link to="/fragrance">
              <img
                style={{ height: "100%", width: "95%", margin: "auto" }}
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwd7e14bc4/images/Summer2022/xcat_fall-preview_su3_atb.jpg?yocs=o_s_"
                alt="six"
              />
            </Link>
          </div>
          <div className={styles.sixsubsection}>
            <div>
              <div style={{ height: "200px" }}>
                <img
                  style={{ height: "100%", width: "30%" }}
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c8ff84b/crop/026527339_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
                  alt=""
                />
              </div>
              <div className={styles.sub_subsection}>
                <p>
                  Pumpkin Apple
                  <br />
                  Gentle Foaming Hand Soap
                  <br />
                  $7.50
                </p>
                <div>
                  <button>ADD TO BAG</button>
                </div>
              </div>
            </div>
            <div>
              <div style={{ height: "200px" }}>
                <img
                  style={{ height: "100%", width: "30%" }}
                  src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw408b4ce5/crop/026539011_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"
                  alt=""
                />
              </div>
              <div className={styles.sub_subsection}>
                <p>
                  Pumpkin Pecan waffles
                  <br />
                  Single Wick Candle
                  <br />
                  $15.50
                </p>
                <div>
                  <button>ADD TO BAG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section 6 end */}

        {/* section 7 start */}
        <div className={styles.sevensection}>
          <div>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw1772e880/images/Summer2022/sp_bts_su3_hps.jpg?yocs=o_s_"
              alt="seven"
            />
            <p>In time for back to school: this new formula</p>
            <Link to="/handsoaps">Shop Hand Soaps</Link>
          </div>
          <div>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw56931592/images/Summer2022/fbc_poppy_su3_hps.jpg?yocs=o_s_"
              alt="seven"
            />
            <p>Finally fall for floral with NEW Poppy</p>
            <Link to="/bodycare">Shop Body Care</Link>
          </div>
        </div>
        {/* section 7 end */}

        {/* section 8 start */}
        <div className={styles.eightsection}>
          <Link to="/">
            <img
              className={styles.eightsection}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7958e0ee/images/Summer2022/xcat_sum-sale_su3_hb.jpg?yocs=s_"
            />
          </Link>
        </div>
        {/* section 8 end */}

        <div>
          <img
            style={{ width: "100%", marginTop: "40px" }}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2874cfd1/images/Summer2022/xcat_mens-shop_su1_hb.jpg?yocs=s_"
          />
        </div>

        {/* section 9 start */}
        <div className={styles.ninesection}>
          <div>
            <h2>MORE GOOD THING, THIS WAY</h2>
          </div>
          <div className={styles.ninesubsection}>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=o_s_"
                alt="nine"
              />
              <Link to="/">Shop - it's fast, free, easy</Link>
            </div>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_"
                alt="nine"
              />
              <Link to="/">Sign up for texts</Link>
            </div>
            <div>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_"
                alt="nine"
              />
              <Link to="/">Sign up for emails</Link>
            </div>
            <div>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_" />
              <Link to="/">Check out Auto Refresh</Link>
            </div>
            <div>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7500932b/images/Spring2022/xcat_mwts-dei_sp2_vn.jpg?yocs=o_s_" />
              <Link to="/">See how everyone belongs</Link>
            </div>
            <div>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_" />
              <Link to="/">See our return policy</Link>
            </div>
          </div>
        </div>
        {/* section 9 end */}

        {/* section 10 start */}
        <div className={styles.tensection}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/instagram-3244518-2701889.png"
            alt=""
          />
          <p>@ BATHANDBODYWORKS</p>
        </div>
        {/* section 10 end */}

        {/* section 11 start */}
        <div className={styles.elevensection}>
          <div>
            <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4MjU3MjcxLjM4MTQ1MDIzMjAyLmpwZWc=.jpg?w=640&h=640&fit=cover" />
          </div>
          <div>
            <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4MjQyMjYzLjkyMTUzMTc1NDY1NS5qcGVn.jpg?w=640&h=640&fit=cover" />
          </div>
          <div>
            <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4MTcwODQ0LjA3Nzc0ODU4OTc5Ni5qcGVn.jpg?w=640&h=640&fit=cover" />
          </div>
          <div>
            <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU4MTU5NzcyLjEyOTc2MjY4MDA5LmpwZWc=.jpg?w=640&h=640&fit=cover" />
          </div>
        </div>
        {/* section 11 end */}

        {/* section 12 */}
        <section className={styles.twelvesection}>
          <div className="p-[20px]">
            <h1 className="text-[28px] text-[#333333] text-center">
              Bath & Body Works
            </h1>
          </div>
          <div className="w-[800px] h-[fit-content] m-auto">
            <p className="text-center text-[14px] text-[#666666] leading-7">
              Bath and Body Works is your go-to place for gifts & goodies that
              surprise & delight. From fresh fragrances to soothing skin care,
              we make finding your perfect something special a
              happy-memory-making experience. Searching for new seasonal
              creations or your favorite discontinued scents? We’ve got you
              covered there, too. Oh! And while you're browsing, shop our latest
              & greatest selection of lotions, soaps and candles!
            </p>
          </div>
        </section>
        {/* section 12 ends */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
