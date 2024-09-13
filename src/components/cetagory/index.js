import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/cetagory1.png";
import img2 from "../../assets/images/cetagory2.png";
import img3 from "../../assets/images/cetagory3.png";
import { Col, Container, Row } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";

const cetaName = [
  {
    cetimg: img1,
    cettitle: "Dining",
  },
  {
    cetimg: img2,
    cettitle: "Living",
  },
  {
    cetimg: img3,
    cettitle: "Bedroom",
  },
];
const Cetagory = ({}) => {
  return (
    <div className={styles.cetagorySection}>
      <Container>
        <Row>
          {cetaName.map((item, index) => (
            <Col lg={4}>
              <div className={styles.cetagory} key={index}>
                <div className={styles.c_image}>
                  <Link>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: item.cettitle,
                          isFluidWidth: true,
                          src: item.cetimg,
                        },
                        largeImage: {
                          src: item.cetimg,
                          width: 1200,
                          height: 800,
                        },
                        enlargedImageContainerDimensions: {
                          width: "150%",
                          height: "150%",
                        },
                      }}
                    />
                  </Link>
                </div>
                <div className={styles.c_info}>
                  <Link>{item.cettitle}</Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Cetagory;
