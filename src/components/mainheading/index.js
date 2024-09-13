import React from "react";
import styles from "./style.module.css";

const MainHeading = ({ title, textAlign }) => {
  return (
    <div className={styles.main_heading} style={{ textAlign: `${textAlign}` }}>
      {title}
    </div>
  );
};
export default MainHeading;
