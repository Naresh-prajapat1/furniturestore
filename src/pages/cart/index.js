import React from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import CartTotle from "../../components/cartTotle";
import BreadCurmb from "../../components/breadCurmb";
import image from "../../assets/images/breadcurmb1.jpeg";
import Trophy from "../../components/trophy";

const Cart = ({ img = image }) => {
  return (
    <>
      <Section>
        <BreadCurmb bg={img} title={"Cart"} page={"Cart"} />
      </Section>
      <Section pt={72} pb={63}>
        <CartTotle />
      </Section>
      <Section pb={8}>
        <Trophy />
      </Section>
    </>
  );
};
export default Cart;
