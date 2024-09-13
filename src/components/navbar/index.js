import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../logo";
import MenuItem from "../menuItems";
import User from "../../icons/user";
import SearchIcon from "../../icons/search";
import LikeIcon from "../../icons/like";
import CardIcon from "../../icons/card";
import { Link } from "react-router-dom";
import ShopingCard from "../shopingCard";
import HumburgerIcon from "../../icons/humbrger";
import { CartContext } from "../../context";
const MenuItems = [
  {
    id: 1,
    title: "Home",
    path: "",
    children: [
      { id: 11, title: "Home 1", path: "/home1" },
      { id: 12, title: "Home 2", path: "/home2" },
      { id: 13, title: "Home 3", path: "/home3" },
    ],
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
    children: [
      { id: 11, title: "Course 1", path: "/" },
      { id: 12, title: "Course 2", path: "/course2" },
      { id: 13, title: "Course 3", path: "/course3" },
    ],
  },
  {
    id: 3,
    title: "Cart",
    path: "/cart",
    children: [
      { id: 11, title: "Page 1", path: "/page1" },
      { id: 12, title: "Page 2", path: "/page2" },
      { id: 13, title: "Page 3", path: "/page3" },
    ],
  },
  {
    id: 4,
    title: "Checkout",
    path: "/checkOut",
    children: [
      { id: 11, title: "Shop 1", path: "/shop1" },
      { id: 12, title: "Shop 2", path: "/shop2" },
      { id: 13, title: "Shop 3", path: "/shop3" },
    ],
  },
];

const NavBar = ({ id }) => {
  const { handleSiderBarClose, handleSiderBarOpen, openSiderBar } =
    useContext(CartContext);
  const [menu, setMenu] = useState(false);
  const { cart } = useContext(CartContext);
  const handleOpenToggle = () => {
    setMenu(!menu);
  };

  return (
    <div className={styles.navbar}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.nav_nav_item}>
              <div className={styles.n_logo}>
                <Logo />
              </div>
              <div
                className={`${styles.nav_items} ${
                  menu ? styles.menuOpen : ""
                }`}>
                {MenuItems.map((item, index) => (
                  <MenuItem key={index} item={item} path={item.path} />
                ))}
              </div>
              <div className={styles.nav_right_icon}>
                <Link to={"/singUp"}>
                  <User />
                </Link>
                <Link to={"#"}>
                  <SearchIcon />
                </Link>
                <Link to={"#"}>
                  <LikeIcon />
                </Link>
                <div className={styles.humburder} onClick={handleOpenToggle}>
                  <HumburgerIcon />
                </div>
                <div className={styles.cart_btn_close}>
                  <button onClick={handleSiderBarOpen}>
                    <CardIcon />
                    <span>{cart.length}</span>
                  </button>
                  {openSiderBar && (
                    <ShopingCard
                      onClose={handleSiderBarClose}
                      cartbar={openSiderBar}
                    />
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavBar;
