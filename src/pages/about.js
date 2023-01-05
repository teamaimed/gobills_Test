import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
import imgBanner from "../assets/image/inner/about-banner.png";
import CTA from "../sections/landing4/CTA";
import imgC1 from "../assets/image/inner/about-content-1.png";
import imgC2 from "../assets/image/inner/about-content-2.png";
import imgC3 from "../assets/image/inner/about-content-3.png";
import imgC4 from "../assets/image/inner/about-content-4.png";
import imgT1 from "../assets/image/inner/team-image-1.png";
import imgT2 from "../assets/image/inner/team-image-2.png";
import imgT3 from "../assets/image/inner/team-image-3.png";
import imgT4 from "../assets/image/inner/team-image-4.png";
import imgT5 from "../assets/image/inner/team-image-5.png";
import imgT6 from "../assets/image/inner/team-image-6.png";
import imgT7 from "../assets/image/inner/team-image-7.png";
import Fact from "../sections/landing1/Fact";
const AboutPage = () => {
  return (
    <>   <Head>
    <title>About us | GoBills</title>
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
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-11 mb-lg-14">
                  <h2 className="title gr-text-2 mb-9 mb-lg-12">Our story</h2>
                  <p className="gr-text-8 mb-0">
                  With Gobills, you can stop wasting hours on managing multiple spreadsheets and billing software. 
                  </p>
                </div>
              </Col>
              <Col xs="12">
                <div className="banner-fluid-image pt-lg-9">
                  <img src={imgBanner} alt="" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                    We are here to help the customers to get their success.
                  </h2>
                </div>
              </Col>
              <Col lg="6">
                <div className="pr-xl-13">
                  <p className="gr-text-8 mb-7 mb-lg-10">
                  "Gobills is an easy-to-use, affordable and smart solution for your business. You can manage your invoices, quotes, inventory from one place."  {" "}
                  </p>
                  <p className="gr-text-8 mb-0">
                  Gobills is a cloud-based accounting and billing software that helps businesses in India to manage their invoices, quotes, inventory from one place. Gobills enables you to create quotes and invoices, and manage your inventory with a few clicks. Gobills eliminates the need to use pen and paper or excel sheets to track your business finances.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-section pt-14 pt-lg-27 pb-13 pb-lg-27 bg-default-2">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col sm="8" lg="5" xl="6" className="mb-9 mb-lg-0">
                <div className="content-grid-image-group d-flex  mx-sm-n3">
                  <div className="single-image d-flex flex-column px-3 px-sm-6">
                    <img
                      src={imgC1}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />

                    <img
                      src={imgC2}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="800"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />
                  </div>
                  <div className="single-image d-flex flex-column pt-11 px-3 px-sm-6">
                    <img
                      src={imgC3}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="400"
                      className="w-100 pb-6 pb-sm-9 rounded-10"
                    />

                    <img
                      src={imgC4}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-delay="1200"
                      className="w-100 rounded-10"
                    />
                  </div>
                </div>
              </Col>
              <Col
                sm="8"
                lg="6"
                xl="5"
                className="offset-lg-1 offset-lg-1 offset-xl-0"
              >
                <div className="content-text">
                  <h2 className="gr-text-3 mb-7 mb-lg-11">
                    Gobills Mission<br className="d-none d-lg-block" />{" "}
                  
                  </h2>
                  <p className="gr-text-8 mb-7 mb-lg-10">
                  Gobills is a startup from Delhi with the aim to provide the best and most user-friendly accounting platform.               {" "}
                  </p>
                  <p className="gr-text-8 mb-0">
                  Gobills is the best and most powerful accounting solution with amazing features just in one platform. It is an ideal platform for small businesses, freelancers or startups that need to manage their finances. Gobills simplifies your bookkeeping processes by automatically capturing all the financial transactions with its intuitive interface.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Fact/>
        <CTA/>
      </PageWrapper>
    </>
  );
};
export default AboutPage;
