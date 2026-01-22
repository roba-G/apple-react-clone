import React from 'react'

import icon from "../resources/images/icons/16.png";
import FooterSection from '../resources/js/FooterSection';

function Footer() {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="container">
          {/* upper text stays unchanged */}
          <div className="upper-text-container">
            {/* your paragraphs here */}
          </div>

          <div className="footer-links-wrapper row">
            <div className="col-sm-12 col-md">
              <FooterSection title="Shop and Learn">
                <li>
                  <a href="#">Mac</a>
                </li>
                <li>
                  <a href="#">iPad</a>
                </li>
                <li>
                  <a href="#">iPhone</a>
                </li>
                <li>
                  <a href="#">Watch</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">Music</a>
                </li>
                <li>
                  <a href="#">AirPods</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
              </FooterSection>
            </div>

            <div className="col-sm-12 col-md">
              <FooterSection title="Services">
                <li>
                  <a href="#">Apple Music</a>
                </li>
                <li>
                  <a href="#">Apple TV+</a>
                </li>
                <li>
                  <a href="#">Apple Arcade</a>
                </li>
                <li>
                  <a href="#">iCloud</a>
                </li>
              </FooterSection>

              <FooterSection title="Account">
                <li>
                  <a href="#">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="#">Apple Store Account</a>
                </li>
                <li>
                  <a href="#">iCloud.com</a>
                </li>
              </FooterSection>
            </div>

            <div className="col-sm-12 col-md">
              <FooterSection title="Apple Store">
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
              </FooterSection>
            </div>

            <div className="col-sm-12 col-md">
              <FooterSection title="For Business">
                <li>
                  <a href="#">Apple and Business</a>
                </li>
                <li>
                  <a href="#">Shop for Business</a>
                </li>
              </FooterSection>

              <FooterSection title="For Education">
                <li>
                  <a href="#">Apple and Education</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
              </FooterSection>
            </div>

            <div className="col-sm-12 col-md">
              <FooterSection title="Apple Values">
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Environment</a>
                </li>
              </FooterSection>

              <FooterSection title="About Apple">
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
              </FooterSection>
            </div>
          </div>

          {/* bottom area unchanged */}
          <div className="copyright-wrapper row">
            <div className="copyright col-md-8">
              Copyright © 2020 Apple Inc.
            </div>
            <div className="footer-country col-md-4 text-md-right">
              <img src={icon} alt="" /> United States
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
