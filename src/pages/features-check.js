import React from "react";

import PageWrapper from "../components/PageWrapper";

import Content1 from "../sections/landing9/Content1";
import Content2 from "../sections/landing9/Content2";
import Content3 from "../sections/landing9/Content3";
import Pricing from "../sections/landing9/Pricing";
import CTA from "../sections/landing9/CTA";
import Features from "../sections/landing1/Feature";
import Feature from "../sections/landing3/Feature";
import Hero from "../sections/landing4/Features";
import Fearures from "../sections/landing6/Features";
const Product = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          align: "center",
          isFluid: true,
          button: "cta", // cta, account, null
          buttonText: "Buy now - Starting at $99",
        }}
        footerConfig={{
          theme: "light",
          style: "style4", //style1, style2
        }}
      >
      
        <Content1 />
        <Content2 />
        <Content3 />
        <Pricing />
        <Features/>
        <Feature/>
        <Hero/>
        <Fearures/>
        <CTA />
      </PageWrapper>
    </>
  );
};

export default Product;
