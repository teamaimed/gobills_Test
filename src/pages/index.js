import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing10/Hero";
import Features from "../sections/landing4/Features";
import Content1 from "../sections/landing4/Content1";
import Fact from "../sections/landing4/Fact";
import Content2 from "../sections/landing4/Content2";
import Testimonial from "../sections/landing4/Testimonial";
import Pricing from "../sections/landing4/Pricing";
import Faq from "../sections/landing4/Faq";
import CTA from "../sections/landing4/CTA";
import Head from "next/head";
import Hero10 from "../sections/landing4/Features";
import Contentone from "../sections/landing9/Content1";
import Featuresone from "../sections/landing1/Feature";
import Services from "../sections/landing1/Services";
import Content12 from "../sections/landing1/Content1";
import Fact10 from "../sections/landing1/Fact";
const IndexPage = () => {
  return (
    
   
    <>
    
    <Head>
    <title>Best Billing and Accounting Software | GoBills</title>
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
       
         
      <Hero />
     
      <Fact10/>
      <Content2 />
      <Content1 />
      <Features />
      <Services/>
     
    

    
    <Featuresone/>
      <Testimonial />
      
    
      <CTA />
    </PageWrapper>
  </>
  );
};
export default IndexPage;
