import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { AddressContext } from "../../context/addressProvider";

const BillingDetails = () => {
  const { address, setAddress } = useContext(AddressContext);
  const [openSection, setOpenSection] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOpen = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? "" : section));
  };

  return (
    <div className={styles.billing_details}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={styles.bd_info_box}>
              <div className={styles.bib_title}>Billing details</div>
              <form onSubmit={handleSubmit}>
                <div className={styles.bib_form}>
                  <div className={styles.bib_nameinput}>
                    <div className={styles.bibni_name}>
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="first"
                        value={address.first}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.bibni_last}>
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="last"
                        value={address.last}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={styles.bibni_comp}>
                    <label>Company Name (Optional)</label>
                    <input
                      type="text"
                      placeholder=""
                      name="optinal"
                      value={address.optinal}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.bibni_country}>
                    <label>Country / Region</label>
                    <select
                      value={address.country}
                      name="country"
                      onChange={handleChange}>
                      <option value={""}>Sri Lanka</option>
                      <option value={"Indian"}>Indian</option>
                      <option value={"Landan"}>Landan</option>
                    </select>
                  </div>
                  <div className={styles.bibni_stree}>
                    <label>Street address</label>
                    <input
                      type="address"
                      placeholder=""
                      name="address"
                      value={address.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.bibni_stree}>
                    <label>Town / City</label>
                    <input
                      type="address"
                      placeholder=""
                      name="city"
                      value={address.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.bibni_country}>
                    <label>Province</label>
                    <select
                      name="provi"
                      value={address.provi}
                      onChange={handleChange}>
                      <option value={""}>Western Province</option>
                      <option value={"Western Province"}>
                        Western Province
                      </option>
                      <option value={"Western Province"}>
                        Western Province
                      </option>
                    </select>
                  </div>
                  <div className={styles.bibni_stree}>
                    <label>ZIP code</label>
                    <input
                      type="password"
                      placeholder=""
                      name="password"
                      value={address.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.bibni_stree}>
                    <label>Phone</label>
                    <input
                      type="phone"
                      placeholder=""
                      name="phone"
                      value={address.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.bibni_stree}>
                    <label>Email address</label>
                    <input
                      type="email"
                      placeholder=""
                      name="email"
                      value={address.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.bibni_add_info}>
                    <input
                      type="text"
                      placeholder="Additional information"
                      name="addi"
                      value={address.addi}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit">submit</button>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.bd_product_totle}>
              <div className={styles.bdpt_title}>
                <h5>Product</h5>
                <h5>Subtotal</h5>
              </div>
              <div className={styles.bdpt_product_conut}>
                <div className={styles.bdptpc_title}>Asgaard sofa X 1</div>
                <div className={styles.bdptpc_price}>Rs. 250,000.00</div>
              </div>
              <div className={styles.bdpt_product_conut1}>
                <div className={styles.bdptpc_title1}>Subtotal</div>
                <div className={styles.bdptpc_price1}>Rs. 250,000.00</div>
              </div>
              <div className={styles.bdpt_product_conut2}>
                <div className={styles.bdptpc_title1}>Total</div>
                <div className={styles.bdptpc_price2}>Rs. 250,000.00</div>
              </div>
              <div className={styles.bdpt_transfer}>
                <div className={styles.bt_direct}>
                  <div
                    className={`${styles.btd_point} `}
                    onClick={() => handleOpen("bankTransfer")}>
                    <span className={styles.btd_dot}></span>
                    <span className={styles.btd_title}>
                      Direct Bank Transfer
                    </span>
                  </div>
                  <div
                    className={`${styles.btd_desc} ${
                      openSection === "bankTransfer" ? styles.openToggle : ""
                    }`}>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>
                <div className={styles.bt_direct1}>
                  <div
                    className={styles.btd_point}
                    onClick={() => handleOpen("directBank")}>
                    <span className={styles.btd_dot1}></span>
                    <span className={styles.btd_title1}>
                      Direct Bank Transfer
                    </span>
                  </div>
                  <div
                    className={`${styles.btd_desc} ${
                      openSection === "directBank" ? styles.openToggle : ""
                    }`}>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>
                <div className={styles.bt_direct2}>
                  <div
                    className={styles.btd_point}
                    onClick={() => handleOpen("cashOnDelivery")}>
                    <span className={styles.btd_dot2}></span>
                    <span className={styles.btd_title2}>Cash On Delivery</span>
                  </div>
                  <div
                    className={`${styles.btd_desc} ${
                      openSection === "cashOnDelivery" ? styles.openToggle : ""
                    }`}>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </div>
                </div>
                <div className={styles.privacy}>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </div>
                <div className={styles.place_btn_oder}>
                  <button>Place order</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BillingDetails;
