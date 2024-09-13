import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Images from "../../assets/images/funitureLogo.png";
const Logo = ({ logoImg = Images }) => {
  return (
    <>
      <Link to={"/"} className={styles.logo_img}>
        <img src={logoImg} alt="not" />
      </Link>
    </>
  );
};
export default Logo;
