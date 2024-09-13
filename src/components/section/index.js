import React from "react";
import Styles from "./style.module.css";

const Section = ({ children, bgcolor, pt, pb, bgImg, customclass }) => {
  return (
    <>
      <div
        className={`${Styles.section} ${Styles[bgcolor]} ${customclass}
         ${bgImg ? Styles.bgImg : ""}`}
        style={{
          backgroundImage: `url(${bgImg}) `,
          paddingTop: `${pt}px`,
          paddingBottom: `${pb}px`,
        }}>
        {children}
      </div>
    </>
  );
};

export default Section;
