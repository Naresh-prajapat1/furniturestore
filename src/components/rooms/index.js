import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import MainHeading from "../mainheading";
import Button from "../button";
import img1 from "../../assets/images/slider1.png";
import img2 from "../../assets/images/slider2.png";
import img3 from "../../assets/images/slider3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const sliderSwiper = [
  {
    slider: img1,
  },
  {
    slider: img1,
  },
  {
    slider: img1,
  },
];
const Rooms = ({}) => {
  return (
    <div className={styles.rooms}>
      <Container>
        <Row>
          <Col lg={4}>
            <div className={styles.r_details}>
              <MainHeading
                title={"50+ Beautiful rooms inspiration"}
                textAlign={"left"}
              />
              <div className={styles.rd_descr}>
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </div>
              <div className={styles.rd_btn}>
                <Button btn={true} title={"Explore More"} />
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className={styles.r_imgslider}>
              <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={40}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 2000,
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  425: {
                    slidesPerView: 1,
                    // spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    // spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    // spaceBetween: 50,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper">
                {sliderSwiper.map((item, index) => (
                  <SwiperSlide>
                    <div className={styles.ri_image1} key={index}>
                      <div className={styles.rii_slider1}>
                        <img src={item.slider} />
                      </div>
                      <div className={styles.rii_content}>
                        <p>01 -- Bed Room</p>
                        <h5>Inner Peace</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Rooms;
