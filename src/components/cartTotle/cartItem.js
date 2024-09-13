import React from "react";
import styles from "./style.module.css";
import DeleteIcon from "../../icons/delete";

const CartItem1 = ({ image, title, id, removeFromCart, price, count }) => {
  return (
    <>
      <tr className={styles.ctp_ppqs_product}>
        <td className={styles.ctpppqsp_image}>
          <img src={image} />
        </td>
        <td className={styles.ctp_title}>{title}</td>
        <td>Rs. 250,000.00</td>
        <td className={styles.ctpppqsp_cunt}>
          <input type="number" placeholder="1" />
        </td>
        <td style={{ color: "#000" }}>$ {price}</td>
        <td className={styles.ctppp_btn}>
          <button
            onClick={() => {
              removeFromCart(id);
              console.log(removeFromCart(id));
            }}>
            <DeleteIcon />
          </button>
        </td>
      </tr>
    </>
  );
};
export default CartItem1;
