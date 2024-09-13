import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import FilterIcon from "../../icons/filter";
import ForPointIcon from "../../icons/forpoint";
import ForPoint2Icon from "../../icons/forpoint2";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={styles.f_filterIon}>
              <div className={styles.ff_filterIcon}>
                <li>
                  <FilterIcon />
                </li>
                <li>Filter</li>
              </div>
              <div className={styles.ff_icons}>
                <li>
                  <ForPointIcon />
                </li>
                <li>
                  <ForPoint2Icon />
                </li>
              </div>
              <div className={styles.ff_results}>
                Showing 1–16 of 32 results
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.ff_show}>
              <div className={styles.ffs_show1}>
                <li className={styles.ffss_li1}>Show</li>
                <li className={styles.ffss_li2}>16</li>
              </div>
              <div className={styles.ffs_show2}>
                <li>Short by</li>
                <li className={styles.ffss_li2}>Default</li>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Filter;
