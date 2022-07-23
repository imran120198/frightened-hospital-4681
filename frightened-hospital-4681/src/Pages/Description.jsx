import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { CartContext } from "../Context/CartProvider";

const Description = () => {
  const { setCartLength } = useContext(CartContext);
  const notify = () =>
    toast.success("Added to Cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const notify2 = () =>
    toast.warning("Already Present in Cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      rtl: false,
    });
  const addToCart = (e) => {
    let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let flag = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id == e.id) {
        // alert("err");
        notify2();
        flag = true;
      }
    }
    if (flag == false) {
      e.quantity = 1;
      cartItems.push(e);
      localStorage.setItem("cartProducts", JSON.stringify(cartItems));
      //   alert("item Addes")
      notify();
    }
    setCartLength(cartItems.length);
  };

  let descData = JSON.parse(localStorage.getItem("proDesc"));
  //   console.log("descData:", descData);
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-4/5 mx-[400px] flex flex-wrap">
            <img
              style={{
                height: "250px",
                marginTop: "50px",
              }}
              alt="ecommerce"
              src={descData.pImg}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {descData.category1}
              </h2>
              <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {descData.name}
              </h2>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span style={{fontSize:"18px",fontWeight:"bold"}}>
                    {descData.Rating} Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{descData.desc}</p>
              <div className="flex">
                <span style={{fontSize:"18px",fontWeight:"bold"}}>
                  ${descData.Amount}
                </span>
                <br />
                <button
                  onClick={() => addToCart(descData)}
                  style={{
                    border: "2px solid black",
                    backgroundColor: "black",
                    color: "white",
                    height: "50px",
                    width: "300px",
                    fontSize: "16px",
                    marginTop: "20px",
                    padding: "auto",
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Description;
