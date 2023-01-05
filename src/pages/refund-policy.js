import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
const TermsConditions = () => {
  return (
    <>
      <Head>
    <title>Refund & Cancellation Policy | Free Billing and Accounting Software | GoBills</title>
    <meta property="og:title" content="Free Billing and Accounting Software | GoBills" key="title" />
  </Head>
      <PageWrapper
        headerConfig={{
          align: "right",
          button: "account", // cta, account, null
        }}footerConfig={{
          theme: "light",
          style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner pt-29 pb-6">
          <Container>
            <Row className="justify-content-center pt-5">
              <Col xl="8" lg="9" md="11">
                <div className="px-xl-15 px-lg-8 text-center">
                  <h2 className="title gr-text-2 mb-9">
                   Privacy Policy
                  </h2>
                 
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="main-block pb-21">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <div className="px-lg-8 px-xl-3">
                  <div className="single-block mb-11">
                    <p className="gr-text-9">
                

                    <h5><b style={{width: "80%", marginLeft: '6rem'}}>Refund Policy
</b></h5>
<p style={{width: "80%", marginLeft: '6rem'}}>When you buy our products/services, your purchase is covered by our 24 hours money back guarantee. If you are, for any reason, not entirely happy with your purchase, we will cheerfully issue a full refund, subject to deductions for legal documents or services provided. To request a refund under this guarantee, you must contact us within the first 24 hours of your payment. Just send an email to support@gobills.in . We'll gladly refund you 70% of your fees within 24-72 hours of your refund request.



</p>
<h5><b style={{width: "80%", marginLeft: '6rem'}}>Cancellation Policy

</b></h5>
<p style={{width: "80%", marginLeft: '6rem'}}>Gobills believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:

</p>


<p style={{width: "80%", marginLeft: '6rem'}}>Cancellations will be considered only if the request is made within 24 hours of placing an order. However, the cancellation request will not be entertained if the orders have been communicated to the operational team and Operations team has initiated the process of assignment. Cancellation and refund of fees or charges will be strictly governed by the Company Refund Policy of the company informed and declared from time to time.

</p>
<p style={{width: "80%", marginLeft: '6rem'}}>There is no cancellation of orders placed under the Same day delivery category.
 

</p>
<p style={{width: "80%", marginLeft: '6rem'}}>No cancellations are entertained for those products/services that the Gobills marketing team has obtained on special discounts and offers on occasions like New Year, Pongal, Diwali, Independence Day, Foundation Day etc. These are limited occasion offers and therefore cancellations are not possible.

</p>

      
          

</p>
</div>
                  <div className="single-block mb-11">
                    <h3 className="gr-text-8 font-weight-bold pb-3"></h3>
                   
                  </div>
               </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default TermsConditions;
