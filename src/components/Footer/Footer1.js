import React, { useContext } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  return (
    <>
      <div
        className={`footer-section pt-15 pt-lg-25 pb-lg-21 ${
          gContext.footer.theme === "dark"
            ? "dark-mode-texts bg-blackish-blue"
            : ""
        }`}
        style={{backgroundColor: '#ffffff'}}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3" md="4">
              <Logo
                white={gContext.footer.theme === "dark"}
                className="footer-logo mb-11"
              />
              <p className="gr-text-11">
              Gobills is an advanced accounting and billing software for businesses. You can manage your invoices, quotes, inventory from one place.
                  </p>
              <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">
              
                <li className="mr-2">
                  <Link href="//facebook.com/GoBillsin-105493211844070">
                    <a className={iconClassName}>
                      <i className="icon icon-logo-facebook"></i>
                    </a>
                  </Link>
                </li>
                <li className="mr-2">
                  <Link href="//instagram.com/gobillsin/">
                    <a className={iconClassName}>
                      <i className="icon icon-instant-camera-2"></i>
                    </a>
                  </Link>
                </li>
                
              </ul>
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <Row>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Company</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/about">
                          <a className={linkClassName}>About us</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/contact">
                          <a className={linkClassName}>Contact us</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/blogs">
                          <a className={linkClassName}>Blogs</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="//forms.gle/8rtTMkxj5pfbA3bA8">
                          <a className={linkClassName}>Appsumo</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/faq">
                          <a className={linkClassName}>FAQ</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Product</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/features">
                          <a className={linkClassName}>Features</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/pricing">
                          <a className={linkClassName}>Pricing</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/coming-soon">
                          <a className={linkClassName}>News</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="//gobills.tawk.help/">
                          <a className={linkClassName}>Resources</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="//gobills.tawk.help/">
                          <a className={linkClassName}>Support</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Features</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/features">
                          <a className={linkClassName}>Invoices</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/features">
                          <a className={linkClassName}>Accounting</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/features">
                          <a className={linkClassName}>Easy bill sharing</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/features">
                          <a className={linkClassName}>Book Keeping</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Legal</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <Link href="/privacy-policy">
                          <a className={linkClassName}>Privacy Policy</a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/terms-conditions">
                          <a className={linkClassName}>
                            Terms &amp; Conditions
                          </a>
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link href="/refund-policy">
                          <a className={linkClassName}>Return Policy</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                 
                </Col>
              </Row> 
            </Col>
          
          </Row> 
          <div><br></br></div>
       
          <center>
      <h6>Made with ❤️ for Better Accounting</h6>
      </center>  
        </Container>
        
     
                  
      </div>
     
    </>
  );
};

export default Footer;
