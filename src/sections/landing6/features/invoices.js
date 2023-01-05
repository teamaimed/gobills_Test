import React from "react";
import Link from "../../../components/Link";
import { Container, Row, Col } from "react-bootstrap";

import imgHero from "../../../assets/image/l4/png/invo.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section bg-default-2 pt-lg-15 pb-13 pb-lg-24">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="7">
              <div
                className="content-img pr-9"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <img
                  src={imgHero}
                  alt=""
                  className="gr-image-box-shadow mw-100"
                />
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-11 pt-lg-0 ps-xl-7">
                <h2 className="gr-text-4 mb-7 heading-color">
             Professional Invoices <br className="d-none d-lg-block" />
                  
                </h2>
                <p className="gr-text-8 mb-0 text-color-opacity">
                Gobills is the most cutting-edge Invoices generation platform. It allows you to create professional invoices that are 100% compliant with the accounting standards. Generate your invoices in 5 minutes and get paid instantly – no more waiting for days!
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
