import React from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import Head from "next/head";
import imgHero from "../../assets/image/l1/png/l3-hero-img.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="pb-11 pb-lg-14 pt-25 pt-lg-29 bg-default-1 position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              sm="10"
              md="9"
              lg="7"
              xl="6"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
              <div className="hero-content text-center">
                <h1 className="gr-text-3 mb-8">
                Make your accounting and billing faster & easier.
                </h1>
                <p className="gr-text-8">
                Billing needs a makeover. We started Gobills to provide businesses owner with the best smart accounting and billing software like never before. Give it a try!
            </p>
                <div className="hero-btns d-flex flex-column flex-md-row justify-content-md-center mt-11">
                <Head>
        <script async src="https://teamaimed.000webhostapp.com/script.js" />
      </Head>
       <div style={{textAlign: 'center'}}> <a className="typeform-share button" href="https://form.typeform.com/to/BjH4API9?typeform-medium=embed-snippet" data-mode="popup" style={{display: 'inline-block', textDecoration: 'none', backgroundColor: '#473bf0', color: 'white', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '50px', textAlign: 'center', margin: 0, height: '50px', padding: '0px 33px', borderRadius: '10px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}} data-size={50} target="_blank">Register for Free</a> </div>
               {/* <!-- Second Button --> 
                 <Link href="google.com">
                    <a className="btn btn-white gr-hover-y">Learn more</a>
                  </Link>
                  */}
                </div>
              </div>
            </Col>
            <Col sm="10" className="mt-15 mt-lg-23">
              <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <img className="img-fluid" src={imgHero} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
