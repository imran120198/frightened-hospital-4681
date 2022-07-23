import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const SignUPSignIn = () => {
  const [signup, setSignup] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignin = (e) => {
    const inputName = e.target.name;
    setSignin({
      ...signin,
      [inputName]: e.target.value,
    });
  };
  const notify = () =>
    toast.success("Signin successfull", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,

      rtl: false,
    });
  const notifyTwo = () =>
    toast.warning("Invalid credentials", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,

      rtl: false,
    });
  const onSigninSubmit = (e) => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData.email == signin.email &&
      userData.password == signin.password
    ) {
      signin.email = "";
      signin.password = "";
      notify();
      // alert("Signin successfull")
      navigate("/");
    } else {
      notifyTwo();
      // alert("Invalid credentials")
    }
  };
  const handleSignup = (e) => {
    const inputName = e.target.name;
    setSignup({
      ...signup,
      [inputName]: e.target.value,
    });
  };
  const notifySignup = () =>
    toast.success("Signup successfull", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,

      rtl: false,
    });
  const onSignupSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(signup));
    //
    // console.log(document.getElementsById("fname"))

    signup.fName = "";
    signup.lName = "";
    signup.email = "";
    signup.password = "";
    setSignup({
      ...signup,
    });
    // console.log(signup);
    // alert("Signup successfull");
    notifySignup();
  };
  return (
    <>
      <Navbar />
      <div id={styles.ricon}>
        <div className={styles.ribanner}>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"
            alt="Sign in or sign up for an account. Shopping fun, right this way."
          />
        </div>
        <p className={styles.rihead}>Sign In or Sign Up</p>
        <div className={styles.ridivider}></div>
        <div className={styles.rimain}>
          <div>
            <h2>SIGN IN</h2>
            <p>If you already have an account with us, sign in below</p>
            <form onSubmit={onSigninSubmit}>
              <div className={styles.riinput}>
                <label>Email Address</label>
                <input
                  className={styles.inputbox}
                  type="email"
                  name="email"
                  value={signin.email}
                  onChange={handleSignin}
                  required
                />
              </div>
              <div className={styles.riinput}>
                <label>Password</label>
                <input
                  className={styles.inputbox}
                  type="password"
                  name="password"
                  value={signin.password}
                  onChange={handleSignin}
                  required
                />
              </div>
              <div className={styles.riinput}>
                <label style={{ display: "inline-block", marginRight: "55px" }}>
                  Forgot Password?
                </label>

                <input type="checkbox" style={{ marginRight: "10px" }} />
                <label style={{ display: "inline-block" }}>Remember Me</label>
              </div>
              <a
                className={styles.riprivacy}
                href="https://www.bathandbodyworks.com/customer-care/privacy-and-security.html"
              >
                Privacy Policy
              </a>

              <input
                type="submit"
                className={styles.risubmit}
                value="SIGN IN"
              />
            </form>
          </div>
          <div className={styles.rispace}></div>

          <div className={styles.rior}>Or</div>
          <div>
            <h2>SIGN UP</h2>
            <p>If don't have account with us, sign up below</p>
            <form onSubmit={onSignupSubmit}>
              <div
                className={styles.riinput}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <div>
                  <label>First Name</label>
                  <input
                    className={styles.inputbox}
                    type="text"
                    id="fname"
                    value={signup.fName}
                    name="fName"
                    onChange={handleSignup}
                    required
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    className={styles.inputbox}
                    type="text"
                    name="lName"
                    value={signup.lName}
                    onChange={handleSignup}
                    required
                  />
                </div>
              </div>
              <div className={styles.riinput}>
                <label>Email Address</label>
                <input
                  className={styles.inputbox}
                  type="email"
                  name="email"
                  value={signup.email}
                  onChange={handleSignup}
                  required
                />
              </div>
              <div className={styles.riinput}>
                <label>Password</label>
                <input
                  className={styles.inputbox}
                  type="password"
                  name="password"
                  value={signup.password}
                  onChange={handleSignup}
                  required
                />
              </div>

              <a
                className={styles.riprivacy}
                href="https://www.bathandbodyworks.com/customer-care/privacy-and-security.html"
              >
                Privacy Policy
              </a>

              <input
                type="submit"
                className={styles.risubmit}
                value="CREATE ACCOUNT"
              />
            </form>
          </div>
        </div>
        <h3>QUESTIONS?</h3>
        <p className={styles.ricall}>
          We’re here for you! Call us at 1-800-756-5005.
        </p>
        <ToastContainer />
        <Footer />
      </div>
    </>
  );
};

export default SignUPSignIn;
