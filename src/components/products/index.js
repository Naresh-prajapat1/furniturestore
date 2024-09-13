import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Button from "../button";
import ShareIcon from "../../icons/share";
import ComperIcon from "../../icons/comper";
import Like2Icon from "../../icons/like2";
import { CartContext } from "../../context/index";
import Snackbar from "../snackBar";
import { SnackBarContext } from "../../context/snackbar";

const Products = ({
  image,
  price,
  title,
  id,
  originalPrice = "2.500.000",
  productItem,
}) => {
  const { handleSnackOpen, visibleProductId } = useContext(SnackBarContext);
  const { cart, addToCart } = useContext(CartContext);
  const [goToCard, setGoToCard] = useState(false);

  const handleAddToCart = (item) => {
    addToCart(item);
    handleSnackOpen(id, "Item Add To Cart");
  };

  useEffect(() => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    setGoToCard(existingItemIndex !== -1);
  }, [cart, id]);

  return (
    <Fragment>
      <div className={styles.product_card}>
        <div className={styles.pc_images}>
          <div className={styles.pci_img}>
            <Link to={`/singleProductPage/${id}`}>
              <img src={image} alt={`${title} image`} />
            </Link>
          </div>
          <div className={styles.pci_discount}>-30%</div>
          <div className={styles.pci_add}>
            <div className={styles.pci_btn}>
              {!goToCard ? (
                <Button
                  titlebtn={"Add To Cart"}
                  fill={true}
                  btn={false}
                  onClick={() => handleAddToCart(productItem)}
                />
              ) : (
                <Button title={"Go To Cart"} fill={true} btn={true} />
              )}
            </div>
            <div className={styles.pci_share}>
              <ul>
                <li>
                  <ShareIcon />
                  Share
                </li>
                <li>
                  <ComperIcon />
                  Compare
                </li>
                <li>
                  <Like2Icon />
                  Like
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.pc_info}>
          <div className={styles.pci_name}>
            <Link to={`/singleProductPage/${id}`}>{title}</Link>
          </div>
          <div className={styles.pci_stylish}>Stylish cafe chair</div>
          <div className={styles.pci_price}>
            <span>Rp {price}</span>
            <del>Rp {originalPrice}</del>
          </div>
        </div>
        {/* Conditionally render Snackbar only if a message is available */}
        {visibleProductId === id && <Snackbar />}
      </div>
    </Fragment>
  );
};

export default Products;
