import React from "react";
import styles from "./TopOffer.module.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Categories from "../../Components/Categoris/Categories";
const TopOffer = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <div className={styles.main}>
        {/* offers */}
        <div className={styles.topoffer}>
          <div>
            <div className={styles.offerdiv}>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe50d047c/images/Summer2022/cndl_fall-preview_su3_ss.jpg?yocs=o_s_" />
              <h3>Limited tim only!</h3>
              <p>All 3-wick Candles</p>
              <h3>$13.50</h3>
              <Link to="/candle">
                <div className={styles.offerbutton}>
                  <button>SHOP</button>
                </div>
              </Link>
            </div>
            <div className={styles.offerdiv}>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw814bfa90/images/Summer2022/fbc_poppy_su3_ss.jpg?yocs=o_s_" />
              <p>All Full Size Body Care</p>
              <h3>Buy 3, Get 3 Free</h3>
              <p>Lowest-priced items are free</p>
              <Link to="/handsoap">
                <div className={styles.offerbutton}>
                  <button>SHOP</button>
                </div>
              </Link>
            </div>
            <div className={styles.offerdiv}>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6382bf84/images/Summer2022/sp_meadow_su3_ss.jpg?yocs=o_s_" />
              <p>Hand Soaps</p>
              <h3>5/$25</h3>
              <Link to="/handsoap">
                <div className={styles.offerbutton}>
                  <button>SHOP</button>
                </div>
              </Link>
            </div>
            <div className={styles.offerdiv}>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw104a83c3/images/Summer2022/diff_bts_su3_ss.jpg?yocs=o_s_" />
              <p>Wallflowers fragrance Refills</p>
              <h3>5/$25</h3>
              <Link to="/fragrance">
                <div className={styles.offerbutton}>
                  <button>SHOP</button>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.offerdiv}>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2ab1f338/images/Summer2022/cndl_sw-roadtrip-pumpkin_ss.jpg?yocs=o_s_" />
              <p>Single Wick Candles</p>
              <h3>2/$22</h3>
              <Link to="/candle">
                <div className={styles.offerbutton}>
                  <button>SHOP</button>
                </div>
              </Link>
            </div>
            <div className={styles.offerdiv}>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwbe9e1de6/images/Summer2022/sn_champ-toast_sum3_0_ss.jpg?yocs=o_s_" />
              <p>Hand Sanitizer 5-Packs</p>
              <h3>$8</h3>
              <Link to="/sanitizer">
                <div className={styles.offerbutton}>
                  <button>SHOP</button>
                </div>
              </Link>
            </div>
            <div className={styles.offerdiv}></div>
            <div className={styles.offerdiv}></div>
          </div>
        </div>

        {/* banner */}
        <div>
          <img style={{marginTop:"20px", marginBottom:"30px", width:"42%"}} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa13b1ecf/images/loyalty/1650-evergreen-sp22_sb.jpg?yocs=o_s_" />
        </div>

        {/* <---:start paragraph:---> */}
        <div className={styles.para}>
          <p
            style={{
              marginTop: "30px",
              fontSize: "25px",
              fontWeight: "400",
              color: "rgb(80, 78, 78)",
            }}
          >
            About Top Offers from Bath & Body Works
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Welcome to the one-stop-shop for all Bath & Body Works coupons. This
            is the spot to watch for the latest deals, coupon codes, hottest
            steals and the most need-right-now promotions we’ve got going on.
            From home fragrance favorites to body care loves, we definitely have
            something amazing for whatever mood (or season) you’re feeling.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              color: "rgb(160, 153, 153)",
            }}
          >
            And while you’re here, let’s talk about a few things that we’re
            totally obsessed with right now. After all, a Bath & Body Works
            promotion is the best time to try something new, right? We’re super
            excited about our new body care collections (they’re basically joy
            in a bottle), and our latest candle and Wallflowers arrivals turn
            your home into a fragrance paradise. Trust us: with Bath & Body
            Works coupons, you actually can have it all!
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Another way we love using Bath & Body Works coupon codes? On gifts,
            of course! Check your calendar: if you have any birthdays or
            holidays on the horizon, this would be the perfect time to stock up
            on someone’s (or your) favorite fragrance. You could even score a
            few extra hand soaps or single wick candles to keep in your gift
            closet for the next celebration. (Incredible gifting strategy, go
            you!) And if you have a few common questions, let’s answer them
            here…
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              lineHeight: "25px",
              marginTop: "20px",
            }}
          >
            How do you get Bath & Body Works coupons mailed to you?
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "5px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Just fill out our Mailing Address Update email form. Choose "Add me
            to your mailing list" as your Request Type and provide all relevant
            information. Then you should be good to go!
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Does Bath & Body Works offer free shipping?
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "5px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Sometimes! Sign up for emails to stay in the know – it’s that easy.
            Don’t forget you can also see our best deals on this page.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            How many promo codes can you redeem per online order?
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "5px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Just one! Keep in mind that a lot of offers and promotions don’t
            require a promo code, so you can still add one in that case. If more
            than one code is entered at checkout, the only code that will be
            applied is the last promo code entered.
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            What is the Bath & Body Works return policy?
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "10px",
              color: "rgb(160, 153, 153)",
            }}
          >
            We just want you to love it! Return anything, anytime for any
            reason. 100% guaranteed. Learn more about our happiness guarantee.
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(160, 153, 153)",
            }}
          >
            We’re always updating this page with the latest and greatest Bath &
            Body Works sales, so bookmark it now and check back often. Other
            coupon sites can wait – this is the spot to check for the best
            deals. Hint, hint: now that you’ve seen our greatest deals shop our
            newest arrivals.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopOffer;
