import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import SingleProduct from "../../components/singleProduct";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../../components/products";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/button";
import { CartContext } from "../../context";

const SingleProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const nav = useNavigate();
  const [product, setProduct] = useState([]);

  const getProduct = useCallback(
    async (productId) => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        setProduct(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching product:", error);
        nav("/");
      }
    },
    [nav]
  );

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(4);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    const fetchProducts = (limit) => {
      fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          if (data.length < limit) {
            setAllLoaded(true);
          }
        })
        .catch((error) => console.error("Error fetching products:", error));
    };
    fetchProducts(load);
  }, [load]);

  const handleLoadMore = () => {
    setLoad((prevLoad) => prevLoad + 4);
  };

  return (
    <>
      <Section>
        <SingleProduct
          item={product}
          image1={product.image}
          id={product.id}
          slider1={product.image}
          price={product.price}
          title={product.title}
          addToCart={addToCart}
        />
      </Section>
      <Section pt={55} pb={100}>
        <Container>
          <Row className="g-5">
            {products.map((item, index) => (
              <Col lg={3} key={index}>
                <Products
                  image={item.image}
                  price={item.price}
                  title={item.title}
                />
              </Col>
            ))}
          </Row>
          {!allLoaded && (
            <div className={styles.loadmore}>
              <Button
                titlebtn={"Show More"}
                btn={false}
                onClick={handleLoadMore}
              />
            </div>
          )}
        </Container>
      </Section>
    </>
  );
};

export default SingleProductPage;
