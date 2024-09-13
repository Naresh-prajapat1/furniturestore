import React from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
import Button from "../button";
import imgbg from "../../assets/images/herosection1.jpeg";
const HeroSection = ({ image = imgbg }) => {
  return (
    <div
      className={styles.hero_section}
      style={{
        backgroundImage: `url(${image})`,
      }}>
      {/* <Container> */}
      <div className={styles.hs_inner}>
        <div className={styles.hsi_content}>
          <div className={styles.hsic_topheading}>New Arrival</div>
          <div className={styles.hsic_mainheading}>
            Discover Our
            <br /> New Collection
          </div>
          <div className={styles.hsic_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />{" "}
            elit tellus, luctus nec ullamcorper mattis.
          </div>
          <div className={styles.hsic_btn}>
            <Button title={"BUY NOW"} fill={false} />
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};
export default HeroSection;
