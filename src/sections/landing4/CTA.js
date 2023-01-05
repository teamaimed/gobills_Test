import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CTA = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section-1 py-12 pt-lg-20 pb-lg-18 border-bottom border-gray-3 "style={{backgroundColor: '#ffffff'}}>
        <Container>
          <Row className="align-items-center ">
            <Col lg="6">
              <div className="section-title cta-text pr-lg-5">
                <h2 className="gr-text-5 mb-7">
                  Grow your business with best Billing and Accounting Software.
                </h2>
                <p className="gr-text-8">
                Gobills helps small business owners have an excellent, reliable and robust accounting system for a very affordable cost. We make accounting, billing easy and efficient for your business with our smart software.
                </p>
              </div>
            </Col>
            <Col lg="6" xl="5" className="offset-xl-1">
              <div className="cta-btn d-flex flex-column flex-sm-row justify-content-lg-end mt-5 mt-lg-0">
                <Link href="/features">
                  <a className="btn gr-bg-blue-opacity-1 text-primary--light-only gr-hover-y with-icon mr-sm-7 mb-6 mb-sm-0">
                    Learn more
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </Link>
                <div style={{textAlign: 'center'}}> <a className="typeform-share button" href="https://v2.gobills.in/register" data-mode="popup" style={{display: 'inline-block', textDecoration: 'none', backgroundColor: '#473bf0', color: 'white', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '50px', textAlign: 'center', margin: 0,  padding: '0px 33px', borderRadius: '10px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}} data-size={50} target="_blank">Register for Free</a> </div>
     
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CTA;
