import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import imgC from "../../assets/image/l1/png/l1-content2-img.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section2 pt-12 pb-5 pt-lg-19 pb-lg-23 bg-default-1">
        <Container>
          <Row className="justify-content-center">
            <Col md="10" lg="8" xl="7">
              <div className="section-title text-center mb-11 mb-lg-19">
                <h2 className="gr-text-4 mb-6">Why gobills?</h2>
                <p className="gr-text-8 px-lg-4">
                Gobills provide the benefits of a full billing and accounting solution to small and medium businesses. Help you create invoices, quotation, manages inventory and many more. 
                </p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="6" className="mb-10 mb-lg-0">
              <div className="content-img img-group-2">
                <img className="img-fluid" src={imgC} alt="" />
              </div>
            </Col>
            <Col sm="11" lg="6" xl="5">
              <div className="content-widget-1 pl-lg-9">
                <div className="media single-widget mb-7">
                  <div className="count circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="text-primary--light-only gr-text-9">
                      1
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="gr-text-7">Unlimited Invoices & Estimates</h3>
                  
                  </div>
                </div>
                <div className="media single-widget mb-7">
                  <div className="count circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="text-primary--light-only gr-text-9">
                      2
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="gr-text-7">Advance Analytics</h3>
                    
                  </div>
                </div>
                <div className="media single-widget mb-7">
                  <div className="count circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="text-primary--light-only gr-text-9">
                      3
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="gr-text-7">Billing and Accounting</h3>
                   
                  </div>
                </div>
             
                <div className="media single-widget mb-7">
                  <div className="count circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="text-primary--light-only gr-text-9">
                     4
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="gr-text-7">One year Access</h3>
                   
                  </div>
                </div>
                <div className="media single-widget mb-7">
                  <div className="count circle-sm gr-bg-blue-opacity-1 mr-8">
                    <span className="text-primary--light-only gr-text-9">
                      5
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="gr-text-7">Ultimate Business Addition</h3>
                   
                  </div>
                </div> </div>
             
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
