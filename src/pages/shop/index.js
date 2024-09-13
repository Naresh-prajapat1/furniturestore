import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import NavBar from "../../components/navbar";
import Breadcrumb from "../../components/breadCurmb";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/images/breadcurmb1.jpeg";
import Filter from "../../components/filter";
import Products from "../../components/products";
import Trophy from "../../components/trophy";
import Footer from "../../components/footer";
const Shop = ({ img1 = image }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className={styles.shop}>
      <Section>
        <Breadcrumb bg={img1} title={"Shop"} page={"Shop"} />
      </Section>
      <Section>
        <Filter />
      </Section>
      <Section pt={46} pb={46}>
        <Container>
          <Row className="gx-4 gy-5">
            {products.map((item, index) => (
              <Col lg={3} key={index}>
                <Products
                  productItem={item}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </Col>
            ))}
          </Row>
          <div className={styles.paginetion}>
            <li className={styles.pagi1}>1</li>
            <li className={styles.pagi2}>2</li>
            <li className={styles.pagi3}>3</li>
            <li className={styles.pagi4}>Next</li>
          </div>
        </Container>
      </Section>
      <Section>
        <Trophy />
      </Section>
    </div>
  );
};

export default Shop;
