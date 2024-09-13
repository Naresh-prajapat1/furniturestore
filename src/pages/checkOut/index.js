import React from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import BreadCurmb from "../../components/breadCurmb";
import image from "../../assets/images/breadcurmb1.jpeg";
import BillingDetails from "../../components/billingDetails";
import Trophy from "../../components/trophy";

const CheckOut = ({ img = image }) => {
  return (
    <>
      <Section>
        <BreadCurmb bg={img} title={"Checkout"} page={"Checkout"} />
      </Section>
      <Section pt={63} pb={52}>
        <BillingDetails />
      </Section>
      <Section>
        <Trophy />
      </Section>
    </>
  );
};
export default CheckOut;
