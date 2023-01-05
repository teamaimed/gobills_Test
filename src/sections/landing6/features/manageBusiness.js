import React from "react";
import Link from "../../../components/Link";
import { Container, Row, Col } from "react-bootstrap";

import imgHero from "../../../assets/image/l4/png/manangebusi.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-2 pt-lg-13 pb-13 pb-lg-21">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              sm="10"
              lg="6"
              className="offset-xl-1  order-lg-2 mb-9 mb-lg-0"
            >
              <div
                className="double-image-group-opacity"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img className="gr-image-box-shadow mw-100" src={imgHero} alt="" 
               
                />
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h2 className="gr-text-4 mb-7 heading-color">
                 Manage Business
                </h2>
                <p className="gr-text-8 mb-0 text-color-opacity">
                Gobills is a small business accounting system, designed to help you manage your entire business with ease. Our goal is to make accounting and billing simple for everyone.
                </p>
               
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
