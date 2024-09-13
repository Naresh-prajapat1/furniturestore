import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Button = ({
  title,
  fill = false,
  display = true,
  titlebtn,
  btn = true,
  onClick,
  link,
}) => {
  return (
    <>
      {btn ? (
        <div
          className={`${fill ? styles.fill : styles.button} ${
            display ? styles.inline_block : styles.block
          }`}>
          <Link to={link}>{title}</Link>
        </div>
      ) : (
        <button className={styles.button_type} onClick={onClick} type="submit">
          {titlebtn}
        </button>
      )}
    </>
  );
};

export default Button;
