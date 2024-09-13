import React from "react";
import styles from "./style.module.css";
const Description = ({ title, custom }) => {
  return <div className={`${styles.description} ${custom}`}>{title}</div>;
};
export default Description;
