import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import imgC from "../../assets/image/l1/png/l1-content1-img.png";

const Content = () => {
  return (
    <>
      {/* <!-- Content Area --> */}
      <div className="content-section pt-12 pb-13 pt-lg-21 pb-lg-22 bg-default-2">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="5" className="pr-lg-9">
              <div className="content-text">
                <h2 className="gr-text-4 mb-8">
                  Getting started gobills
                </h2>
                <p className="gr-text-8 pr-4 mb-11">
                Gobills is an AI powered cloud accounting software that helps small business owners to manage their businesses better. It can help you in managing your cash flow, taxes, expenditure & profitability and many more at a single click.  </p>      
                <div className="content-btn">
                <div style={{textAlign: 'left'}}> <a className="typeform-share button" href="https://v2.gobills.in/register" data-mode="popup" style={{display: 'inline-block', textDecoration: 'none', backgroundColor: '#473bf0', color: 'white', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '50px', textAlign: 'center', margin: 0, height: '50px', padding: '0px 33px', borderRadius: '10px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}} data-size={50} target="_blank">Register for Free</a> </div>
      
                </div>
              </div>
            </Col>
            <Col sm="10" lg="6" className="offset-lg-1 mt-10 mt-lg-0">
              <div
                className="content-img img-group-1"
                data-aos="zoom-in"
                data-aos-duration="750"
              >
                <img className="img-fluid" src={imgC} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
