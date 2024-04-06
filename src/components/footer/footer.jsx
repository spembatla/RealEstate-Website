import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="newsletter-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-6 bdr-right">
                  <div className="call-us">
                    <div className="phone-img">
                      <img src="https://weblordinstitute.com/assets/images/call-us.svg" />
                    </div>
                    <div className="con-text">
                      <h4>Call us</h4>
                      <h6>1111-111-111</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6">
                  <div className="call-us">
                    <div className="phone-img">
                      <img src="https://weblordinstitute.com/assets/images/email.svg" />
                    </div>
                    <div className="con-text">
                      <h4>Email us</h4>
                      <h6>realestate@home.com</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <form>
                <div className="input-group form-group">
                  <input
                    type="text"
                    className="form-control bk"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required="required"
                    placeholder="Enter your email"
                  />
                  <div className="input-group-append">
                    <button
                      class="btn btn-outline-secondary bt"
                      id="mc-submit"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="upper-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-content">
                <img
                  src="https://codewithsadee.github.io/homeverse/assets/images/logo-light.png"
                  className="foot-logo"
                />
                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the and typesetting
                  industry. Lorem Ipsum is dummy text of the printing.
                </p>
                <p>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  B-Wing, New Tower, Mumbai
                </p>
                <p>
                  <i class="fa fa-phone" aria-hidden="true"></i> (+91)
                  1111-111-111
                </p>
                <p>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  realestate@home.com
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-title">
                <h3>Company</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">All Products</a>
                  </li>
                  <li>
                    <a href="#">Location Map</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-title">
                <h3>Services</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="#">Order Tracking</a>
                  </li>
                  <li>
                    <a href="#">Wish List</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Promotional Offers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-title">
                <h3>Customer Care</h3>
              </div>
              <div className="footer-content">
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">All Products</a>
                  </li>
                  <li>
                    <a href="#">Location Map</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-social">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="copyright-sec">
        <div class="container">
          <div class="row">
            <div class="text-center">
              <div class="cop-p">
                <p>
                  2024 Design By <a href="#">RealEstate Pvt Ltd </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
