import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";

const Fact = () => {
  return (
    <>
      {/* <!-- Fact Area --> */}
      <div className="fact-section py-12 pt-lg-20 pb-lg-17 bg-default-1 border-bottom border-gray-3 ">
        <Container>
          <Row className="justify-content-center mb-n9">
            <Col sm="6" md="6" lg="4" className="mb-9">
              <div className="single-fact d-flex px-9 px-sm-0 px-xl-9">
                <h3 className="gr-text-3 mr-9">10000+</h3>
                <p className="gr-text-9 mb-0">
                  Invoice Generated
                </p>
              </div>
            </Col>
            <Col sm="6" md="6" lg="4" className="mb-9">
              <div className="single-fact d-flex px-9 px-sm-0 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp duration={3} end={98} />%
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Satisfaction rate from our customers.
                </p>
              </div>
            </Col>
            <Col sm="6" md="6" lg="4" className="mb-9">
              <div className="single-fact d-flex px-9 px-sm-0 px-xl-9">
                <h3 className="gr-text-3 mr-9">
                  <LazyLoad>
                    <span className="counter">
                      <CountUp
                        duration={3}
                        decimal="."
                        decimals={1}
                        end={1.25}
                      />
                    </span>
                  </LazyLoad>
                </h3>
                <p className="gr-text-9 mb-0">
                  Average server respnose time!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Fact;
