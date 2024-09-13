import React from "react";
import styles from "./style.module.css";

const SectionMainHeaing = ({ title, custom }) => {
  return (
    <div className={`${styles.section_main_heading} ${custom}`}>{title}</div>
  );
};
export default SectionMainHeaing;
