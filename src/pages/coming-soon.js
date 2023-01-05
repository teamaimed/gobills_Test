import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Head from "next/head";
const ComingSoon = () => {
  return (
    <>
      <Head>
    <title>Coming Soon | Free Billing and Accounting Software | GoBills</title>
    <meta property="og:title" content="Free Billing and Accounting Software | GoBills" key="title" />
  </Head>
  <PageWrapper
      headerConfig={{
        align: "right",
        button: "account", // cta, account, null
      }}
      footerConfig={{
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
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
      
          <center>
          <h2>Coming Soon</h2></center>
          <div style={{textAlign: 'center'}}> <a className="typeform-share button" href="/" data-mode="popup" style={{display: 'inline-block', textDecoration: 'none', backgroundColor: '#000000', color: 'white', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '50px', textAlign: 'center', margin: 0, height: '50px', padding: '0px 33px', borderRadius: '10px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: 'bold', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}} data-size={50} target="_blank">Back to Home</a> </div>
    
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
          <div><br></br></div>
        </PageWrapper>
    </>
  );
};
export default ComingSoon;
