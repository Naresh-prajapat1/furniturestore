import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import single1 from "../../assets/images/single1.png";
import sliderimg1 from "../../assets/images/slider2.png";
import sliderimg2 from "../../assets/images/slider2.png";
import sliderimg3 from "../../assets/images/slider2.png";
import sliderimg4 from "../../assets/images/slider2.png";
import FacebookIcon from "../../icons/facebookIcon";
import LinkedInIcon from "../../icons/linkedinIcon";
import YouTubeIcon from "../../icons/youTubeIcon";
import StarIcon from "../../icons/star";
import Descimg1 from "../../assets/images/spdesc1.png";
import Descimg2 from "../../assets/images/spdesc2.png";
import { CartContext } from "../../context";
import ReactImageMagnify from "react-image-magnify";
// import { CartContext } from "../../context/index";
const SingleProduct = ({
  image1,
  slider1,
  title,
  price,
  description,
  item,
  addToCart,
}) => {
  // const { addToCard } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  // const [newQuantity, setNewQuantity] = useState(quantity);

  const quantityChange = (type) => {
    if (type === "min" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "plus") {
      setQuantity(quantity + 1);
      console.log(quantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
    console.log(quantity);
  };

  return (
    <div className={styles.single_product}>
      <Container>
        <div className={styles.sp1}>
          <Row>
            <Col lg={6}>
              <Row>
                <Col lg={3}>
                  <div className={styles.sp_slider}>
                    <div className={styles.sps_image}>
                      <img src={slider1} />
                    </div>
                    <div className={styles.sps_image}>
                      <img src={slider1} />
                    </div>
                    <div className={styles.sps_image}>
                      <img src={slider1} />
                    </div>
                    <div className={styles.sps_image}>
                      <img src={slider1} />
                    </div>
                  </div>
                </Col>
                <Col lg={9}>
                  <div className={styles.sp_image}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: image1,
                        },
                        largeImage: {
                          src: image1,
                          width: 1200,
                          height: 1800,
                        },
                        enlargedImageContainerStyle: { zIndex: 1 },
                        isHintEnabled: true,
                        shouldUsePositiveSpaceLens: true,
                        enlargedImagePosition: "over",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <div className={styles.sp_productDetailes}>
                <div className={styles.sppd_name}>
                  <h3>{title}</h3>
                </div>
                <div className={styles.sppd_price}>$ {price}</div>
                <div className={styles.sppd_review}>
                  <div className={styles.sppdr_star}>
                    <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                  </div>
                  <div className={styles.sppdr_review}>5 Customer Review</div>
                </div>
                <div className={styles.sppd_description}>{description}</div>
                <div className={styles.sppd_size}>
                  <span>Size</span>
                  <ul>
                    <li>L</li>
                    <li>XL</li>
                    <li>XS</li>
                  </ul>
                </div>
                <div className={styles.sppd_color}>
                  <span>Color</span>
                  <ul>
                    <li className={styles.sppdc_1}></li>
                    <li className={styles.sppdc_2}></li>
                    <li className={styles.sppdc_3}> </li>
                  </ul>
                </div>
                <div className={styles.sppd_cac}>
                  <div className={styles.sppdcac_count}>
                    <span
                      className={styles.sppdcacc1}
                      onClick={() => quantityChange("min")}>
                      -
                    </span>

                    <input type="number" value={quantity} />

                    <span
                      className={styles.sppdcacc2}
                      onClick={() => quantityChange("plus")}>
                      +
                    </span>
                  </div>
                  <div className={styles.sppdcac_addCard}>
                    <button onClick={handleAddToCart}>Add To Cart</button>
                  </div>
                  <div className={styles.sppdcac_compare}>+ Compare</div>
                </div>
                <hr />
                <div className={styles.sppd_scts}>
                  <table>
                    <tr>
                      <td>SKU</td>
                      <td>: SS001</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>: Sofas</td>
                    </tr>
                    <tr>
                      <td>Tags</td>
                      <td>: Sofa, Chair, Home, Shop</td>
                    </tr>
                    <tr>
                      <td>Share</td>
                      <td style={{}}>
                        :
                        <span
                          style={{
                            backgroundColor: "#000",
                            borderRadius: "50px",
                            padding: "5px 7px",
                            color: "#fff",
                            margin: "0 10px 0 10px",
                          }}>
                          <FacebookIcon />
                        </span>
                        <span
                          style={{
                            backgroundColor: "#000",
                            borderRadius: "50px",
                            padding: "5px 7px",
                            color: "#fff",
                            margin: "0 10px 0 10px",
                          }}>
                          <LinkedInIcon />
                        </span>
                        <span
                          style={{
                            backgroundColor: "#000",
                            borderRadius: "50px",
                            padding: "7px 7px",
                            color: "#fff",
                            margin: "0 10px 0 10px",
                          }}>
                          <YouTubeIcon />
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className={styles.sp_dar}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.sp_dar1}>
                <div className={styles.spd_detailes}>
                  <div className={styles.spdd_description}>Description</div>
                  <div className={styles.spdd_addInfo}>
                    Additional Information
                  </div>
                  <div className={styles.spdd_review}>Reviews [5]</div>
                </div>
                <div className={styles.spd_description1}>
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the
                  Kilburn portable active stereo speaker takes the unmistakable
                  look and sound of Marshall, unplugs the chords, and takes the
                  show on the road.
                </div>
                <div className={styles.spd_description2}>
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </div>
                <div className={styles.apd_deta_image}>
                  <div className={styles.apddi_1}>
                    <img src={image1} />
                  </div>
                  <div className={styles.apddi_2}>
                    <img src={image1} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default SingleProduct;
