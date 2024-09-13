import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const BreadCurmb = ({ bg, title, page }) => {
  return (
    <div
      className={styles.bread_curmb}
      style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.bc_over}></div>

      <div className={styles.bc_items}>
        <h4>{title}</h4>
        <div className={styles.bc_pages}>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>{page}</Link>
          </li>
        </div>
      </div>
    </div>
  );
};
export default BreadCurmb;
