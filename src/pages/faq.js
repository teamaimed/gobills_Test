import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import Faq from "../sections/landing4/Faq";
import Link from 'next/link';
import icon1 from "../assets/image/inner/icon-preferences.svg";
import icon2 from "../assets/image/inner/icon-cart.svg";
import icon3 from "../assets/image/inner/icon-coupon.svg";
import icon4 from "../assets/image/inner/icon-layers.svg";
import icon5 from "../assets/image/inner/icon-async.svg";
import icon6 from "../assets/image/inner/icon-chartbar.svg";

import CTA from "../sections/landing4/CTA";
const Pricing1 = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    
    <>
      <Head>
    <title>FAQ | Free GST Billing and Accounting Software | GoBills</title>
    <meta property="og:title" content="Free Billing and Accounting Software | GoBills" key="title" />
  </Head>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }} footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
          <div><br></br></div>

          <div><br></br></div>

          <div><br></br></div>
          <div><br></br></div>

<div><br></br></div>
<div><br></br></div>

<div><br></br></div>     <div><br></br></div>

<div><br></br></div>
<center>
          <div><br></br></div><h2 >
                 FAQ (Frequently Questions Asked)
                  </h2>
</center>
          <div><br></br></div>

          <div><br></br></div>

          <div><br></br></div>

          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>

      <Faq/>
        <CTA/>
         {/* <!-- Hero Area --> 
        <div className="bg-default-2 pb-7 pb-lg-15">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="px-md-12 text-center mb-11 mb-lg-19">
                  <h2 className="title gr-text-3 mb-8">Check our features</h2>
                  <p className="gr-text-8 mb-0">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next consultancy website within
                    few minutes.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg="4" md="6" sm="6" xs="8" className=" mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Quick setup process
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Create custom orders
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Multiple coupons
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon4} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Organize your campaigns
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon5} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Manage customers
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon6} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Track progress fast
                    </h3>
                    <p className="gr-text-9 mb-0">
                      With lots of unique blocks, you can easily build a page
                      without coding. Build your next landing page.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        */}
      </PageWrapper>
    </>
  
  
  
  
  );
};
export default Pricing1;
