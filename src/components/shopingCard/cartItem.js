import React from "react";
import styles from "./style.module.css";
import CloseIcon from "../../icons/close";

const CartItem = ({ image, title, price, removeFromCart, id }) => {
  // const [quantity, setQuantity] = useState(1);

  // const quantityChange = (type) => {
  //   if (type === "min" && quantity > 1) {
  //     setQuantity(quantity - 1);
  //   } else if (type === "plus") {
  //     setQuantity(quantity + 1);
  //     console.log(quantity);
  //   }
  // };

  // const handleAddToCart = () => {
  //   addToCart(item, quantity);
  //   console.log(quantity);
  // };
  return (
    <>
      <div className={styles.sc_products}>
        <div className={styles.scp_image}>
          <img src={image} />
        </div>
        <div className={styles.scp_name}>
          <h5>{title}</h5>
          <span>1 X</span>
          <span className={styles.scpn_price}> {price}</span>
        </div>
        <div className={styles.scp_delete}>
          <button
            onClick={() => {
              removeFromCart(id);
            }}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
};
export default CartItem;
