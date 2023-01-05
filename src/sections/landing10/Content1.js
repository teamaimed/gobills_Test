import React from "react";
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgC from "../../assets/image/l3/jpg/l3-content-img.jpg";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-12 pb-10 bg-default-6 py-xl-25 ">
        <Container>
          <Row className="align-items-center justify-content-md-center">
            <Col lg="4" md="10">
              <div className="content-text text-center text-lg-left mb-9 mb-lg-0 pr-xl-11">
                <h2 className="title gr-text-5 mb-8">
                 Become Gobills Distributor.
                </h2>
                
                <p className="gr-text-8 mb-9">
                  Be the part of the India's one of biggest billing and accounting software company.
                </p>
                <p className="gr-text-8 mb-9">
                  Gobills is commited to help its distributors to earn more than ever.
                </p>
              
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="content-img rounded-8">
                <img className="w-100 rounded-8" src={imgC} alt="" />
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="stats-wrapper mt-6 mt-md-0 pl-xl-9">
                <div
                  className="single-stat py-6"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <h3 className="title gr-text-5 mb-5">Earn More</h3>
                  <p className="gr-text-8 mb-0">
                    On Every Sale you will get 20% per License
                  </p>
                </div>
                <div
                  className="single-stat py-6"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <h3 className="title gr-text-5 mb-5">
                    <LazyLoad>
                      <span className="counter">
                      Flat  <CountUp duration={3} end={10} />%
                      </span>
                    </LazyLoad>
                  </h3>
                  <p className="gr-text-8 mb-0">
                  commision on every renewal with your code.
                  </p>
                </div>
                <div
                  className="single-stat py-6"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <h3 className="title gr-text-5 mb-5">
                    <LazyLoad>
                      <span className="counter">
                    
                      </span>
                      Gobills Support
                    </LazyLoad>
                  </h3>
                  <p className="gr-text-8 mb-0">
                 Gobills support is always here to help you in any situations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
     
      </div>
    </>
  );
};

export default Content;
