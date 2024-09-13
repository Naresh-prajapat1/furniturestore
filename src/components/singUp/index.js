import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionMainHeaing from "../sectionMainHeading";
import Description from "../description";
import { Link } from "react-router-dom";
import GoogleIcon from "../../icons/google";
import Button from "../button";
import { RegisterContext } from "../../context/registerProvider";

const SingUp = () => {
  const { signUpUser } = useContext(RegisterContext);
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    terms: true,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.terms) {
      signUpUser(formValues);
    } else {
      alert("You must agree to the terms.");
    }
    alert("Form submitted successfully");
    console.log("Form submitted successfully", formValues);
  };
  return (
    <div className={styles.log_in}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.li_log}>
              <div className={styles.li_content}>
                <SectionMainHeaing title={"Create Your Account"} />
                <Description
                  title={
                    "Hey there! Ready to log in? Just enter your username and password belowand you'll be back in action in no time. Let's go!"
                  }
                />
              </div>
              <div className={styles.li_google}>
                <div className={styles.lig_link}>
                  <Link to={"#"}>
                    <GoogleIcon />
                    Continue with google
                  </Link>
                </div>
              </div>
              <div className={styles.li_or}>
                <span>or</span>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.li_name}>
                  <div className={styles.lin_input_name}>
                    <label>First Name</label>

                    <input
                      type="text"
                      placeholder="First Name"
                      name="text"
                      value={formValues.text}
                      className={styles.linin_name}
                      onChange={onChange}
                    />
                  </div>
                  <div className={styles.lin_input_lastname}>
                    <label>Last Name</label>

                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last"
                      value={formValues.last}
                      onChange={onChange}
                      className={styles.linin_lname}
                    />
                  </div>
                </div>
                <div className={styles.li_email}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    onChange={onChange}
                    value={formValues.email}
                    className={styles.lie_email}
                  />
                </div>
                <div className={styles.li_password}>
                  <label>Password</label>

                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    onChange={onChange}
                    value={formValues.password}
                    className={styles.lie_password}
                  />
                </div>
                <div className={styles.li_forget}>
                  <div className={styles.lif_remember}>
                    <input type="checkbox" className={styles.checkbox} />
                    Remember me
                  </div>
                  <div className={styles.lif_forgot}>
                    <Link>Forgot Password?</Link>
                  </div>
                </div>
                <div className={styles.li_button}>
                  <Button
                    titlebtn={"Sign Up"}
                    icon={true}
                    display={false}
                    fill={true}
                    btn={false}
                  />
                </div>
                <div className={styles.li_singin}>
                  Don't have an account?
                  <Link to={"/logIn"}>Login</Link>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SingUp;
