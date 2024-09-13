import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import product1Img from "../../assets/images/single1.png";
import CartItem1 from "./cartItem";
import { CartContext } from "../../context/index";

// const cartProduct = [
//   {
//     image: product1Img,
//     title: "Asgaard sofa",
//     price: "Rs. 250,000.00",
//     count: "1",
//   },
//   {
//     image: product1Img,
//     title: "Asgaard sofa",
//     price: "Rs. 250,000.00",
//     count: "1",
//   },
// ];

const CartTotle = ({}) => {
  const {
    cart,
    removeFromCart,
    clearCart,
    handleSiderBarOpen,
    handleSiderBarClose,
    openSiderBar,
  } = useContext(CartContext);

  return (
    <div className={styles.cart_totle}>
      <Container>
        <Row>
          <Col lg={8}>
            <div className={styles.ct_products}>
              <div className={styles.ctp_ppqs}>
                <table>
                  <tr className={styles.ctp_ppqs_table}>
                    <td></td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                    <td></td>
                  </tr>

                  {cart.map((item, index) => (
                    <CartItem1
                      key={index}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      removeFromCart={removeFromCart}
                      price={item.price}
                      count={item.count}
                    />
                  ))}
                </table>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.ct_sub_totle}>
              <h4>Cart Totals</h4>
              <div className={styles.ctst_sub}>
                <div className={styles.ctsts_title}>Subtotal</div>
                <div className={styles.ctsts_price}>Rs. 250,000.00</div>
              </div>
              <div className={styles.ctst_totle}>
                <div className={styles.ctsts_title}>Total</div>
                <div className={styles.ctsts_price1}>Rs. 250,000.00</div>
              </div>
              <div className={styles.ctst_checkout}>
                <button>Check Out</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CartTotle;
