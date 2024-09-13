import { Route, Routes } from "react-router-dom";
import Cetagory from "./components/cetagory";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import NavBar from "./components/navbar";
import Rooms from "./components/rooms";
import Home from "./pages/home";
import Shop from "./pages/shop";
import LayOut from "./layout";
import SingleProduct from "./components/singleProduct";
import SingleProductPage from "./pages/singleProductPage";
import ShopingCard from "./components/shopingCard";
import CartTotle from "./components/cartTotle";
import Cart from "./pages/cart";
import BillingDetails from "./components/billingDetails";
import CheckOut from "./pages/checkOut";
import { useCallback, useEffect, useState } from "react";
import SingUp from "./components/singUp";
import LogIn from "./components/logIn";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path={"shop"} element={<Shop />} />
          <Route path={"cart"} element={<Cart />} />
          <Route path={"checkOut"} element={<CheckOut />} />
          <Route path={"singUp"} element={<SingUp />} />
          <Route path={"logIn"} element={<LogIn />} />
          <Route
            path={"singleProductPage/:id"}
            element={<SingleProductPage />}
          />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
