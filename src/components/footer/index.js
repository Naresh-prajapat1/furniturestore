import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className={styles.f_address}>
              <h3 className={styles.fa_logo}>Funiro.</h3>
              <div className={styles.fa_address}>
                400 University Drive Suite 200 Coral
                <br /> Gables,
                <br /> FL 33134 USA
              </div>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className={styles.link}>
              <div className={styles.l_links}>Links</div>
              <div className={styles.l_list_links}>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Shop</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </div>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className={styles.help}>
              <div className={styles.l_helpName}>Help</div>
              <div className={styles.l_list_help}>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className={styles.newSletter}>
              <div className={styles.ns_new}>Newsletter</div>
              <div className={styles.ns_email}>
                <input type="email" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <div className={styles.all_right}>2023 furino. All rights reverved</div>
      </Container>
    </div>
  );
};
export default Footer;
