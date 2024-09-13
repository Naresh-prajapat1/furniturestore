import React, { Fragment, useContext, useState } from "react";
import styles from "./style.module.css";
import ShopCardIcon from "../../icons/shopcard";
import CloseIcon from "../../icons/close";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";
import { CartContext } from "../../context/index";

const ShoppingCard = ({ onClose, cartbar }) => {
  const {
    cart,
    removeFromCart,
    clearCart,
    openSiderBar,
    handleSiderBarOpen,
    handleSiderBarClose,
  } = useContext(CartContext);

  return (
    <Fragment>
      <div className={`${styles.overlay} ${cartbar ? styles.open : ""}`}></div>
      <div className={styles.shopping_card}>
        <div className={styles.sc_wrap}>
          <div className={styles.scw_shop_card}>
            <div className={styles.scwsc_title}>Shopping Cart</div>
            <div className={styles.scwsc_cardIcon}>
              <button onClick={onClose}>
                <ShopCardIcon />
              </button>
            </div>
          </div>
          <div className={styles.sc_productItem}>
            {cart.map((item, index) => (
              <CartItem
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                removeFromCart={removeFromCart}
                // quantity={quantity}
              />
            ))}
          </div>

          <div className={styles.sc_subtitle}>
            <div className={styles.scs_total}>
              <div className={styles.scst_price}>
                <h6>Subtotal</h6>
                <p>Rs. 25,000,00.0</p>
              </div>
            </div>
            <div className={styles.scs_btn}>
              <Link to={"/cart"}>
                <button>Cart</button>
              </Link>
              <Link to={"/checkOut"}>
                <button>Checkout</button>
              </Link>
              <Link>
                <button>Comparison</button>
              </Link>
              {cart.length > 0 && <button onClick={clearCart}>Clear</button>}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingCard;
