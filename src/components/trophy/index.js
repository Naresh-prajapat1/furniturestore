import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import TrophyIcon from "../../icons/trophy";
import WarrntyIcon from "../../icons/warrnty";
import FreeShopingIcon from "../../icons/freeshoping";
import SuprotIcon from "../../icons/suprot";
const Trophy = () => {
  return (
    <div className={styles.trophy}>
      <Container>
        <Row className="gy-4">
          <Col lg={3} md={6} sm={12}>
            <div className={styles.t_trophy}>
              <div className={styles.tt_Icon}>
                <TrophyIcon />
              </div>
              <div className={styles.tt_content}>
                <h4>High Quality</h4>
                <p>crafted from top materials</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={styles.t_trophy}>
              <div className={styles.tt_Icon}>
                <WarrntyIcon />
              </div>
              <div className={styles.tt_content}>
                <h4>Warranty Protection</h4>
                <p>Over 2 years</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={styles.t_trophy}>
              <div className={styles.tt_Icon}>
                <FreeShopingIcon />
              </div>
              <div className={styles.tt_content}>
                <h4>Free Shipping</h4>
                <p>Order over 150 $</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={styles.t_trophy}>
              <div className={styles.tt_Icon}>
                <SuprotIcon />
              </div>
              <div className={styles.tt_content}>
                <h4>24 / 7 Support</h4>
                <p>Dedicated support</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trophy;
