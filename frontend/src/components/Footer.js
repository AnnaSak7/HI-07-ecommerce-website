import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="nb-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">HTTP DOG POSTERS</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" title="">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      Terms Of Use
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Customer Service</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" title="">
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      Return / Refund policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Contact Us</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" title="">
                      1-800-000 000
                    </a>
                  </li>
                  <li>
                    <a href="/" title="">
                      contact@httpdogposters.com
                    </a>
                  </li>
                </ul>
                <div className="col-sm-12">
                  <div className="about">
                    <div className="social-media">
                      <ul className="list-inline">
                        <li>
                          <a href="/" title="Facebook">
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a href="/" title="Instagrom">
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a href="/" title="Twitter">
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a href="/" title="LinkedIn">
                            <FaLinkedinIn />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="copyright">
          <div className="rights">
            <p>All rights reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
