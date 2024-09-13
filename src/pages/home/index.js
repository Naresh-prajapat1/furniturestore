import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import NavBar from "../../components/navbar";
import HeroSection from "../../components/heroSection";
import Cetagory from "../../components/cetagory";
import Products from "../../components/products";
import MainHeading from "../../components/mainheading";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/button";
import Footer from "../../components/footer";
import Rooms from "../../components/rooms";
import image1 from "../../assets/images/furniture1.png";
import image2 from "../../assets/images/furniture2.png";
import image3 from "../../assets/images/furniture3.png";
import image4 from "../../assets/images/furniture4.png";
import image5 from "../../assets/images/furniture5.png";
import image6 from "../../assets/images/furniture6.png";
import image7 from "../../assets/images/furniture7.png";
import image8 from "../../assets/images/furniture8.png";
import image9 from "../../assets/images/furniture9.png";
const Home = ({
  f_img1 = image1,
  f_img2 = image2,
  f_img3 = image3,
  f_img4 = image4,
  f_img5 = image5,
  f_img6 = image6,
  f_img7 = image7,
  f_img8 = image8,
  f_img9 = image9,
}) => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(8);
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
        <HeroSection />
      </Section>
      <Section pt={56} pb={56}>
        <div className={styles.cetagoryheading}>
          <h4>Browse The Range</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Cetagory />
      </Section>
      <Section pt={56} pb={70}>
        <div className={styles.product_card}>
          <MainHeading title={"Our Products"} />
        </div>
        <Container>
          <Row className="g-5">
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
      <Section>
        <Rooms />
      </Section>
      <Section pt={67} pb={50}>
        <Container>
          {/* <Row>
            <Col lg={12}>
              <div className={styles.furniture}>
                <div className={styles.f_share}>Share your setup with</div>
                <MainHeading title={"#FuniroFurniture"} />
                <div className={styles.funiro_furniture}>
                  <div className={styles.ff_inner}>
                    <div className={styles.ffi_left}>
                      <div className={styles.ffl_furniture1}>
                        <div className={styles.fflf_fuero1}>
                          <img src={f_img1} alt="furniture image" />
                        </div>
                        <div className={styles.fflf_fuero2}>
                          <img src={f_img2} alt="furniture image" />
                        </div>
                      </div>
                      <div className={styles.ffl_furniture2}>
                        <div className={styles.fflf_fuero3}>
                          <img src={f_img3} alt="furniture image" />
                        </div>
                        <div className={styles.fflf_fuero4}>
                          <img src={f_img4} alt="furniture image" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.ffi_center}>
                      <img src={f_img5} alt="furniture image" />
                    </div>
                    <div className={styles.ffi_right}>
                      <div className={styles.ffl_furniture1}>
                        <div className={styles.fflf_fuero5}>
                          <img src={f_img6} alt="furniture image" />
                        </div>
                        <div className={styles.fflf_fuero6}>
                          <img src={f_img7} alt="furniture image" />
                        </div>
                      </div>
                      <div className={styles.ffl_furniture1}>
                        <div className={styles.fflf_fuero7}>
                          <img src={f_img8} alt="furniture image" />
                        </div>
                        <div className={styles.fflf_fuero8}>
                          <img src={f_img9} alt="furniture image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </Section>
    </>
  );
};

export default Home;
