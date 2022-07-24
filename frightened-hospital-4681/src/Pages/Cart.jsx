import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import paypal from "../assets/Images/paypal.png";
import shippingpick from "../assets/Images/shippingpick.PNG";
import close from "../assets/Images/close.png";
import { CartContext } from "../Context/CartProvider";
import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Components/Categoris/Categories";
import Footer from "../Components/Footer/Footer";
import { Center } from "@chakra-ui/react";

const Cart = () => {
  const { setCartLength } = useContext(CartContext);
  let cartItems = JSON.parse(localStorage.getItem("cartProducts"));
  console.log("cartItems:", cartItems);

  const [cart, setCart] = useState(cartItems);
  const totalPrice = () => {
    const totalAmt = cart.reduce((acc, elem) => {
      return acc + Number(elem.Amount) * Number(elem.quantity);
    }, 0);
    let finalAmount = totalAmt;
    localStorage.setItem("totalAmountKey", finalAmount);
    return totalAmt;
  };
  const [totalp, setTotalprice] = useState(totalPrice);

  const handleDecrement = (e) => {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].id === e.id) {
        if (cart[i].quantity > 1) {
          cart[i].quantity--;
          localStorage.setItem("cartProducts", JSON.stringify(cart));
          setCart([...cart]);
          break;
        }
      }
    }
    // console.log("Decrement");
    const tA = totalPrice();
    setTotalprice(tA);
  };

  const handleIncrement = (e) => {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].id === e.id) {
        if (cart[i].quantity < 10) {
          cart[i].quantity++;
          localStorage.setItem("cartProducts", JSON.stringify(cart));
          setCart([...cart]);
          break;
        }
      }
    }
    // console.log("Increment");
    const tA = totalPrice();
    setTotalprice(tA);
  };
  const removeItem = (id) => {
    for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].id === id) {
        cart.splice(i, 1);
        localStorage.setItem("cartProducts", JSON.stringify(cart));
        setCart([...cart]);
        setCartLength(cart.length);
        // console.log("cart:", cart);
        break;
      }
    }
    // console.log("removed");
    const tA = totalPrice();
    setTotalprice(tA);
  };

  if (cart.length == []) {
    return (
      <>
        <Navbar />
        <div className="p-[20px]">
          <Link style={{ color: "black" }} to={"/"}>
            <h1>
              <i
                className="bx bx-left-arrow-alt"
                style={{ fontSize: "12px" }}
              ></i>{" "}
              <span className="text-[12px]">CONTINUE SHOPPING</span>
            </h1>
          </Link>
        </div>
        <section className="h-[fit-content] w-[955px] m-auto">
          <div className="h-[42px]" style={{ borderBottom: "2px solid black" }}>
            <h1 className="text-center text-[22px] text-[#333333]">
              Your Shopping Bag is Empty
            </h1>
          </div>
          <div className="mt-[35px] h-[35px] w-[200px] m-auto">
            <Link to={"/"}>
              <button
                className="h-full w-full bg-[#333333] text-[14px] text-white hover:bg-[#e5e5e5] hover:text-black"
                style={{ transition: ".3s ease-in" }}
              >
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="p-[20px]">
          <Link to={"/"}>
            <h1>
              <i
                className="bx bx-left-arrow-alt"
                style={{ color: "#7a7575", fontSize: "12px" }}
              ></i>{" "}
              <span className="underline text-[12px]">CONTINUE SHOPPING</span>
            </h1>
          </Link>
        </div>
        <section className="h-[fit-content] w-[955px] m-auto">
          <div className="h-[42px]" style={{ borderBottom: "2px solid black" }}>
            <h1 className=" text-[22px] text-[#333333]">Shopping Bag</h1>
          </div>
        </section>
        <section className="w-[955px] h-[fit-content] m-auto mt-5">
          <div className="h-[55px] flex justify-between">
            <div className="w-[200px] p-[8px]">
              <h1 className="text-[16px] text-[#333333]">
                ITEMS IN SHOPPING BAG
              </h1>
            </div>
            <div
              className="w-[180px] h-[40px] ml-[340px] mt-1"
              style={{ borderRadius: "6px" }}
            >
              <Link to={"/paypal"}>
                <button style={{ borderRadius: "6px" }}>
                  <img style={{ height: "20px" }} src={paypal} alt="paypal" />
                </button>
              </Link>
            </div>
            <div
              className="w-[180px] h-[40px] mt-1"
              style={{ borderRadius: "6px" }}
            >
              <Link to={"/cod"}>
                <button
                  style={{
                    borderRadius: "6px",
                    backgroundColor: "green",
                  }}
                >
                  <i className="bx bxs-lock " style={{ color: "#ffff" }}></i>{" "}
                  <span className="text-white font-semibold">CHECKOUT</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-[955px] m-auto mt-2 h-[fit-content] p-1 bg-[whitesmoke]">
          <div className="w-fit m-auto">
            <h1 className="text-black text-center font-bold">
              YOUR SHIPPING AND PICKUP CHOICES
            </h1>
          </div>
        </section>
        <section
          className="w-[955px] m-auto h-[90px] flex items-center justify-center"
          style={{ borderBottom: "3px solid #e5e5e5" }}
        >
          <div className="w-[200px] h-[70px]">
            <div className="w-fit flex">
              <div className="h-fit mt-[25px]">
                <span className="text-center">
                  <img
                    src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1651830360721/images/svg-icons/bopis-shipping.svg?yocs=o_s_"
                    alt="shipping icon"
                  />
                </span>
              </div>
              <div className="ml-[5px] h-fit w-fit mt-[20px]">
                <span className="text-[13.5px] text-[#005699]">
                  <span className="font-bold">{cart.length}</span> Item added
                  for <span className="font-bold">Shipping</span>
                </span>
              </div>
            </div>
          </div>
          <div
            className="w-[220px] h-[70px]"
            style={{ borderLeft: "3px solid #e5e5e5" }}
          >
            <img className="h-full w-full" src={shippingpick} alt="" />
          </div>
        </section>
        {cart.map((items) => {
          return (
            <div
              style={{
                display: "flex",
                height: "200px",
                width: "75%",
                margin: "auto",
                marginTop: "10px",
              }}
            >
              <div style={{ display: "flex", marginRight: "20px" }}>
                <img style={{ height: "200px" }} src={items.pImg} alt="" />
              </div>
              <div
                style={{ marginRight: "20px", height: "30px", margin: "auto" }}
              >
                <h3>{items.name}</h3>
              </div>
              <div
                style={{ marginRight: "20px", height: "30px", margin: "auto" }}
              >
                <h3>{items.category1}</h3>
              </div>
              <div
                style={{ marginRight: "20px", height: "30px", margin: "auto" }}
              >
                <h3>${items.Amount}</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  marginRight: "20px",
                  height: "30px",
                  margin: "auto",
                }}
              >
                <button onClick={() => handleDecrement(items)}>-</button>
                <p style={{ fontWeight: "bold", margin: "auto" }}>
                  {items.quantity}
                </p>
                <button onClick={() => handleIncrement(items)}>+</button>
              </div>
              <div
                style={{ marginRight: "20px", height: "30px", margin: "auto" }}
              >
                <img
                  style={{ height: "20px" }}
                  onClick={() => removeItem(items.id)}
                  className="cursor-pointer"
                  src={close}
                  alt=""
                />
              </div>
            </div>
          );
        })}
        <section
          className="w-[955px] m-auto mt-20 h-[fit-content] flex justify-end p-4"
          style={{ borderTop: "1px solid #e5e5e5" }}
        >
          <div className="w-[500px] h-[fit-content] bg-[whitesmoke]">
            <div className="h-[fit-content] flex justify-between p-2">
              <div className="w-[fit-content] p-2">
                <h1 className="text-[#333333] text-[13px]">
                  MERCHANDISE SUBTOTAL
                </h1>
              </div>
              <div className="w-[fit-content] p-2">
                <h1 className="text-[#333333] text-[13px]">${totalp}</h1>
              </div>
            </div>
            <div className="h-[fit-content] flex justify-between mt-[8px]  p-2">
              <div className="w-[fit-content] p-2">
                <h1 className="text-[#333333] text-[13px]">
                  ESTIMATED SHIPPING & HANDLING - Standard
                </h1>
              </div>
              <div className="w-[fit-content] p-2">
                <h1 className="text-[#333333] text-[13px]">$0.00</h1>
              </div>
            </div>
            <div className="h-[fit-content] flex justify-between mt-[8px]  p-2">
              <div className="w-[fit-content] p-2">
                <h1 className="text-[#333333] text-[13px]">SALES TAX</h1>
              </div>
              <div className="w-[fit-content] p-2">
                <h1 className="text-[#333333] text-[13px]">$0.00</h1>
              </div>
            </div>
            <div className="h-[5px] w-[450px] m-auto mt-[25px] bg-gray-200"></div>
            <section className="h-[fit-content] w-[450px] m-auto mt-2 flex justify-between p-2">
              <div className="w-fit h-fit">
                <h1 className="font-bold text-[16px] text-[#333333]">
                  ORDER TOTAL (USD)
                </h1>
              </div>
              <div className="w-fit h-fit">
                <h1
                  id="totalAmount"
                  className="font-bold text-[16px] text-[#333333]"
                >
                  ${totalp}
                </h1>
              </div>
            </section>
            <section className="h-[50px] w-[450px] m-auto flex justify-around">
              <div className="w-[220px]" style={{ borderRadius: "6px" }}>
                <Link to={"/paypal"}>
                  <button
                    className="h-full w-full bg-yellow-400 hover:bg-[#e5e5e5]"
                    style={{ borderRadius: "6px", transition: ".2s ease-in" }}
                  >
                    <img style={{ height: "20px" }} src={paypal} alt="paypal" />
                  </button>
                </Link>
              </div>
              <div className="w-[220px]" style={{ borderRadius: "6px" }}>
                <Link to={"/cod"}>
                  <button
                    className="h-full w-full"
                    style={{
                      borderRadius: "6px",
                      transition: ".2s ease-in",
                      backgroundColor: "green",
                    }}
                  >
                    <i className="bx bxs-lock " style={{ color: "#ffff" }}></i>{" "}
                    <span style={{ fontWeight: "bold" }}>CHECKOUT</span>
                  </button>
                </Link>
              </div>
            </section>
            <section className="w-[450px] m-auto h-[fit-content] p-3">
              <div className="w-fit h-fit">
                <h1 className="text-[13px] text-[#666666] leading-6">
                  International Shoppers
                </h1>
              </div>
              <div className="w-fit h-fit">
                <h1 className="text-[13px] text-[#666666] leading-6">
                  All prices are displayed and processed in US dollars (USD).
                </h1>
              </div>
            </section>
          </div>
        </section>
        <Footer />
      </>
    );
  }
};

export default Cart;
