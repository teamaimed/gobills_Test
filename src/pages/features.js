import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import icon1 from "../assets/image/inner/icon-preferences.svg";
import icon2 from "../assets/image/inner/icon-cart.svg";
import icon3 from "../assets/image/inner/icon-coupon.svg";
import icon4 from "../assets/image/inner/icon-layers.svg";
import icon5 from "../assets/image/inner/icon-async.svg";
import icon6 from "../assets/image/inner/icon-chartbar.svg";
import icon7 from "../assets/image/inner/billsharing.svg";
import icon8 from "../assets/image/inner/book.svg";
import icon9 from "../assets/image/inner/temp.svg";
import icon10 from "../assets/image/inner/payment.svg";
import icon11 from "../assets/image/inner/cloud.svg";
import Head from "next/head";
import Testimonial from "../sections/landing4/Testimonial";
import CTA from "../sections/landing4/CTA";
import Content1 from "../sections/landing6/features/invoices";
import Content2 from "../sections/landing6/features/manageBusiness";
import Content3 from "../sections/landing6/features/estimates";
import Content4 from "../sections/landing6/features/multipleUsers";
import Content5 from "../sections/landing6/features/secure";
import Content6 from "../sections/landing6/features/easybillsharing";
import Content7 from "../sections/landing6/features/inventoryManagement";
import Content8 from "../sections/landing6/features/bookKeeping";
import Content9 from "../sections/landing6/features/manageCustomers";
import Content10 from "../sections/landing6/features/invoiceTemplates";
import Content11 from "../sections/landing6/features/paymentReminders";
import Content12 from "../sections/landing6/features/cloudPlatform";

const Features = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <>
      <Head>
    <title>Features | Free Billing and Accounting Software | GoBills</title>
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
         
     <div className="bg-default-2 pb-7 pb-lg-15">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8" lg="9">
                <div className="px-md-12 text-center mb-11 mb-lg-19">
                  <h1 className="title gr-text-3 mb-8" paddingTop="500px"><div><br></br></div><div><br></br></div><div><br></br></div>Check our features</h1>
                  <p className="gr-text-8 mb-0">
                  Billing needs a makeover. We started Gobills to provide accountants with the best smart accounting and billing software like never before. Give it a try!
                  </p>
                </div>
              </Col>
            </Row>

         {/* <!-- Hero Area -->      <Row className="justify-content-center">
              <Col lg="4" md="6" sm="6" xs="8" className=" mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                    Invoices
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills is the most cutting-edge Invoices generation platform. It allows you to create professional invoices that are 100% compliant with the accounting standards and GST standards. Generate your invoices in 5 minutes and get paid instantly – no more waiting for days!
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
                      Manage Business
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills is a small business accounting system, designed to help you manage your entire business with ease. Our goal is to make accounting and billing simple for everyone.
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
                      Estimates
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills, the most advanced billing platform in the world. It makes invoicing and receiving payments effortlessly. We are not just a tool for generating estimates that are sent to clients via email but a complete solution that helps you manage your business more efficiently.
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
                     Multiple Users
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills provide the best multi-user system to enable the sharing of the system with your employees or accountant easily without sharing a password. 
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
                    Gobill is a platform to manage your customer and their invoices, payment. It helps you to easily follow up with your customers, send them reminders for payments and get paid on time.
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
                    Secure
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills is a fast, efficient, and secure cloud platform that is made with a mission to provide the best billing software which is compatible with GST billing and many more.

                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon7} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                    Easy bill sharing
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills provide easy bill sharing system with your clients and accountant to make you stress-free.
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
                    Inventory Management
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills comes with an advanced system that enables the power of inventory management with few clicks and less headache.
                    </p>
                  </div>
                </div>
              </Col>
             
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon8} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                    Book Keeping
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills helps business owner to keep their book easy. Business owners don't need to waste time on calculating profit, loss, per customer, and many more.
                    </p>
                  </div>
                </div>
              </Col>
             
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon9} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                    Invoice Templates
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills brings invoice templates to the next level. It enables you to create beautiful invoices for your business without knowing any design languages.
                    </p>
                  </div>
                </div>
              </Col>
             
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon10} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                    Payment Reminder
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Payment Reminder is the easiest way to manage your payments. No more excuses! It's easier than ever for customers to pay you back - and they'll love you even more for it!
                    </p>
                  </div>
                </div>
              </Col>
             
              <Col lg="4" md="6" sm="6" xs="8" className="mb-lg-18 mb-9">
                <div className="feature-card d-flex flex-column flex-md-row ">
                  <div className="card-icon mr-8 mt-2 mb-9 mb-md-0">
                    <img src={icon11} alt="" />
                  </div>
                  <div className="card-texts">
                    <h3 className="gr-text-7 mb-7 gr-text-exerpt">
                      Cloud Platform
                    </h3>
                    <p className="gr-text-9 mb-0">
                    Gobills is a secure cloud platform that provides you with the world's best technology and services to manage your finances. It is highly scalable, reliable, and privacy-focused.
                    </p>
                  </div>
                </div>
              </Col>
             
            </Row>*/}
          </Container>
        </div>
         
        <Content1/>
        <Content2/>
        <Content3/>
        <Content4/>
        <Content5/>
        <Content6/>
        <Content7/>
        <Content8/>
        <Content9/>
        <Content10/>
        <Content11/>
        <Content12/>
        <Testimonial/>
        <CTA/>
      </PageWrapper>
    </>
  );
};
export default Features;
