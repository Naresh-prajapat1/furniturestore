import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionMainHeaing from "../sectionMainHeading";
import Description from "../description";
import { Link } from "react-router-dom";
import GoogleIcon from "../../icons/google";
import Button from "../button";
import { RegisterContext } from "../../context/registerProvider";

const LogIn = () => {
  const [inputV, setInputV] = useState({});
  const { userDetails } = useContext(RegisterContext);
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputV((item) => ({ ...item, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    userDetails(inputV);
    console.log(inputV);
  };

  return (
    <div className={styles.log_in}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.li_log}>
              <div className={styles.li_content}>
                <SectionMainHeaing title={"Welcome back!"} />
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
                <div className={styles.li_email}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={inputV.email}
                    onChange={onChange}
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
                    value={inputV.password}
                    onChange={onChange}
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
                    titlebtn={"Sign In"}
                    icon={true}
                    display={false}
                    fill={true}
                    btn={false}
                  />
                </div>
              </form>
              <div className={styles.li_singin}>
                Don't have an account?
                <Link to={"/singUp"}>Sing Up</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LogIn;
