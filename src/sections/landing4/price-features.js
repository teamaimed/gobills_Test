import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import iconF1 from "../../assets/image/svg/invoice.svg";
import iconF2 from "../../assets/image/svg/profit.svg";
import iconF3 from "../../assets/image/svg/invent.svg";

const Pricefeatures = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="feature-section bg-default-1 pb-4 pb-lg-13 ">
        <Container>
          <Row>
            <Col sm="6" lg="4" className="mb-8">
              <div className="feature-widget-1">
                <div className="media flex-column pr-8 pr-lg-7 pr-xl-12">
                  <div className="icon-wrap">
                    <img src={iconF1} alt="" />
                  </div>
                  <div className="media-body mt-10">
                    <h5 className="gr-text-7 mb-7">Dedicated Support Team</h5>
                    <p className="gr-text-9">
                    Gobills proivde dedicated support teams to give a customer awesome support.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-8">
              <div className="feature-widget-1">
                <div className="media flex-column pr-8 pr-lg-7 pr-xl-12">
                  <img src={iconF2} alt="" />
                  <div className="media-body mt-10">
                    <h5 className="gr-text-7 mb-7">No Hidden Charges</h5>
                    <p className="gr-text-9">
                   Gobills provide with no hidden pricing. With no extra pricing you will gewt all these under one roof.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="6" lg="4" className="mb-8">
              <div className="feature-widget-1">
                <div className="media flex-column pr-8 pr-lg-7 pr-xl-12">
                  <img src={iconF3} alt="" />
                  <div className="media-body mt-10">
                    <h5 className="gr-text-7 mb-7">99.9% uptime</h5>
                    <p className="gr-text-9">
                  Manage your all business finance at your finger tips.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Pricefeatures;
