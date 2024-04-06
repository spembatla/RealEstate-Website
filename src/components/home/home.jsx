import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 hee">
              <p className="heading">
                <i class="fa fa-duotone fa-house-chimney"></i>
                <span>Real Estate Agency</span>
              </p>
              <h1 className="heading-title">Find Your Dream House By Us</h1>
              <p className="heading-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <button className="header-top-btn">Make an Enquiry</button>
            </div>
            <div className="col-lg-6 ">
              <img
                className="w-100"
                src="https://codewithsadee.github.io/homeverse/assets/images/hero-banner.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sec-padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="	https://codewithsadee.github.io/homeverse/assets/images/about-banner-1.png"
                className="w-100"
              />
            </div>
            <div className="col-lg-6">
              <p className="subtitle">About Us</p>
              <h1 className="heading-title">
                The Leading Real Estate Rental Marketplace.
              </h1>
              <p className="about-text">
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
              <ul className="about-list">
                <li className="about-item">
                  <div className="about-item-icon">
                    <i className="fa fa-duotone fa-house-chimney"></i>
                  </div>

                  <p className="about-item-text">Smart Home Design</p>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                    <i className="fa fa-duotone fa-leaf"></i>
                  </div>

                  <p className="about-item-text">Beautiful Scene Around</p>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                    <i className="fa fa-wine-glass"></i>
                  </div>

                  <p className="about-item-text">Exceptional Lifestyle</p>
                </li>
                <li className="about-item">
                  <div className="about-item-icon">
                    <i class="fa fa-duotone fa-shield-halved"></i>
                  </div>

                  <p className="about-item-text">Complete 24/7 Security</p>
                </li>
              </ul>
              <p className="callout">
                "Enimad minim veniam quis nostrud exercitation llamco laboris.
                Lorem ipsum dolor sit amet"
              </p>
              <button className="header-top-btn">Our Services</button>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="subtitles">Our Service</p>
              <h2 className="header-title">Our Main Foucs</h2>
            </div>
            <div className="row mt-10">
              <div className="col-lg-4">
                <div className="cards">
                  <div>
                    <img src="https://codewithsadee.github.io/homeverse/assets/images/service-1.png" />
                  </div>
                  <h3 className="mb-15">Buy a home</h3>
                  <p className="mb-20">
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a href="#" className="card-link">
                    <span>Find a Home</span>
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cards">
                  <div>
                    <img src="https://codewithsadee.github.io/homeverse/assets/images/service-2.png" />
                  </div>
                  <h3 className="mb-15">Rent a home</h3>
                  <p className="mb-20">
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a href="#" className="card-link">
                    <span>Find a Home</span>
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cards">
                  <div>
                    <img src="https://codewithsadee.github.io/homeverse/assets/images/service-3.png" />
                  </div>
                  <h3 className="mb-15">Sell a home</h3>
                  <p className="mb-20">
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a href="#" className="card-link">
                    <span>Find a Home</span>
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-padd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="subtitles">Properties</p>
              <h2 className="header-title">Featured Listings</h2>
            </div>
          </div>
          <div className="row mt-25">
            <ul className="has-scrollbar">
              <li>
                <div className="property-card">
                  <figure className="card-img">
                    <a href="#">
                      <img
                        src="https://codewithsadee.github.io/homeverse/assets/images/property-1.jpg"
                        className="w-100"
                      />
                    </a>
                    <div className="card-badge">For Rent</div>
                    <div className="actions">
                      <div className="button-actions">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <address>Belmont Gardens, Chicago</address>
                      </div>
                      <div className="button-actions">
                        <i class="fa fa-duotone fa-camera"></i>
                        <span>5</span>
                      </div>
                      <div className="button-actions">
                        <i class="fa fa-duotone fa-photo-film"></i>
                        <span>4</span>
                      </div>
                    </div>
                  </figure>
                  <div className="card-content">
                    <div className="card-price">
                      <strong>$ 34,000</strong> /Month
                    </div>
                    <h4 className="mb-15">New Apartment Nice View</h4>
                    <p className="card-text">
                      Beautiful Huge 1 Family House In Heart Of Westbury.
                      <p>Newly Renovated With New Wood</p>
                    </p>
                    <ul className="card-list">
                      <li className="card-item">
                        <strong>3</strong>
                        <i class="fa fa-solid fa-bed"></i>
                        <br />
                        <span>Bedrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>2</strong>
                        <i class="fa fa-thin fa-toilet"></i>
                        <br />
                        <span>Bathrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>3450</strong>
                        <i class="fa fa-duotone fa-square"></i>
                        <br />
                        <span>Square ft</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src="https://codewithsadee.github.io/homeverse/assets/images/author.jpg"
                          className="w-100"
                        />
                      </figure>
                      <div>
                        <h5 className="mb-1">William Seklo</h5>
                        <p>Estate Agents</p>
                      </div>
                    </div>
                    <div className="card-footer-actions">
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-solid fa-up-right-and-down-left-from-center"></i>
                      </button>
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-regular fa-heart"></i>
                      </button>
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="property-card">
                  <figure className="card-img">
                    <a href="#">
                      <img
                        src="https://codewithsadee.github.io/homeverse/assets/images/property-2.jpg"
                        className="w-100"
                      />
                    </a>
                    <div className="card-badge">For Rent</div>
                    <div className="actions">
                      <div className="button-actions">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <address>Belmont Gardens, Chicago</address>
                      </div>
                      <div className="button-actions">
                        <i class="fa fa-duotone fa-camera"></i>
                        <span>5</span>
                      </div>
                      <div className="button-actions">
                        <i class="fa fa-duotone fa-photo-film"></i>
                        <span>4</span>
                      </div>
                    </div>
                  </figure>
                  <div className="card-content">
                    <div className="card-price">
                      <strong>$ 34,000</strong> /Month
                    </div>
                    <h4 className="mb-15">New Apartment Nice View</h4>
                    <p className="card-text">
                      Beautiful Huge 1 Family House In Heart Of Westbury.
                      <p>Newly Renovated With New Wood</p>
                    </p>
                    <ul className="card-list">
                      <li className="card-item">
                        <strong>3</strong>
                        <i class="fa fa-solid fa-bed"></i>
                        <br />
                        <span>Bedrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>2</strong>
                        <i class="fa fa-thin fa-toilet"></i>
                        <br />
                        <span>Bathrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>3450</strong>
                        <i class="fa fa-duotone fa-square"></i>
                        <br />
                        <span>Square ft</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src="https://codewithsadee.github.io/homeverse/assets/images/author.jpg"
                          className="w-100"
                        />
                      </figure>
                      <div>
                        <h5 className="mb-1">William Seklo</h5>
                        <p>Estate Agents</p>
                      </div>
                    </div>
                    <div className="card-footer-actions">
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-solid fa-up-right-and-down-left-from-center"></i>
                      </button>
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-regular fa-heart"></i>
                      </button>
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="property-card">
                  <figure className="card-img">
                    <a href="#">
                      <img
                        src="https://codewithsadee.github.io/homeverse/assets/images/property-3.jpg"
                        className="w-100"
                      />
                    </a>
                    <div className="card-badge">For Rent</div>
                    <div className="actions">
                      <div className="button-actions">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <address>Belmont Gardens, Chicago</address>
                      </div>
                      <div className="button-actions">
                        <i class="fa fa-duotone fa-camera"></i>
                        <span>5</span>
                      </div>
                      <div className="button-actions">
                        <i class="fa fa-duotone fa-photo-film"></i>
                        <span>4</span>
                      </div>
                    </div>
                  </figure>
                  <div className="card-content">
                    <div className="card-price">
                      <strong>$ 34,000</strong> /Month
                    </div>
                    <h4 className="mb-15">New Apartment Nice View</h4>
                    <p className="card-text">
                      Beautiful Huge 1 Family House In Heart Of Westbury.
                      <p>Newly Renovated With New Wood</p>
                    </p>
                    <ul className="card-list">
                      <li className="card-item">
                        <strong>3</strong>
                        <i class="fa fa-solid fa-bed"></i>
                        <br />
                        <span>Bedrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>2</strong>
                        <i class="fa fa-thin fa-toilet"></i>
                        <br />
                        <span>Bathrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>3450</strong>
                        <i class="fa fa-duotone fa-square"></i>
                        <br />
                        <span>Square ft</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src="https://codewithsadee.github.io/homeverse/assets/images/author.jpg"
                          className="w-100"
                        />
                      </figure>
                      <div>
                        <h5 className="mb-1">William Seklo</h5>
                        <p>Estate Agents</p>
                      </div>
                    </div>
                    <div className="card-footer-actions">
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-solid fa-up-right-and-down-left-from-center"></i>
                      </button>
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-regular fa-heart"></i>
                      </button>
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="property-card">
                  <figure className="card-img">
                    <a href="#">
                      <img
                        src="https://codewithsadee.github.io/homeverse/assets/images/property-4.png"
                        className="w-100"
                      />
                    </a>
                    <div className="card-badge">For Rent</div>
                    <div className="actions">
                      <div className="button-actions">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <address>Belmont Gardens, Chicago</address>
                      </div>
                      <div className="button-actions">
                        <i class="fa fa-duotone fa-camera"></i>
                        <span>5</span>
                      </div>
                      <div className="button-actions">
                        <i class="fa fa-duotone fa-photo-film"></i>
                        <span>4</span>
                      </div>
                    </div>
                  </figure>
                  <div className="card-content">
                    <div className="card-price">
                      <strong>$ 34,000</strong> /Month
                    </div>
                    <h4 className="mb-15">New Apartment Nice View</h4>
                    <p className="card-text">
                      Beautiful Huge 1 Family House In Heart Of Westbury.
                      <p>Newly Renovated With New Wood</p>
                    </p>
                    <ul className="card-list">
                      <li className="card-item">
                        <strong>3</strong>
                        <i class="fa fa-solid fa-bed"></i>
                        <br />
                        <span>Bedrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>2</strong>
                        <i class="fa fa-thin fa-toilet"></i>
                        <br />
                        <span>Bathrooms</span>
                      </li>
                      <li className="card-item">
                        <strong>3450</strong>
                        <i class="fa fa-duotone fa-square"></i>
                        <br />
                        <span>Square ft</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer">
                    <div className="card-author">
                      <figure className="author-avatar">
                        <img
                          src="https://codewithsadee.github.io/homeverse/assets/images/author.jpg"
                          className="w-100"
                        />
                      </figure>
                      <div>
                        <h5 className="mb-1">William Seklo</h5>
                        <p>Estate Agents</p>
                      </div>
                    </div>
                    <div className="card-footer-actions">
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-solid fa-up-right-and-down-left-from-center"></i>
                      </button>
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-regular fa-heart"></i>
                      </button>
                      <button className="card-footer-actions-btn">
                        <i class="fa fa-solid fa-circle-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="subtitles">Our Aminities</p>
              <h2 className="header-title">Buliding Aminities</h2>
            </div>
          </div>
          <div className="mt-25">
            <ul className="features-list">
              <li>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <i class="fa fa-solid fa-car"></i>
                  </div>
                  <h3 className="card-title">Parking Space</h3>
                  <div className="card-btn">
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <i class="fa fa-light fa-droplet"></i>
                  </div>
                  <h3 className="card-title">Swimming Pool</h3>
                  <div className="card-btn">
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <i class="fa fa-duotone fa-shield-halved"></i>
                  </div>
                  <h3 className="card-title">Private Security</h3>
                  <div className="card-btn">
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <i class="fa fa-duotone fa-heart-pulse"></i>
                  </div>
                  <h3 className="card-title">Medical Center</h3>
                  <div className="card-btn">
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <i class="fa fa-light fa-book"></i>
                  </div>
                  <h3 className="card-title">Library Area</h3>
                  <div className="card-btn">
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <i class="fa fa-thin fa-bed"></i>
                  </div>
                  <h3 className="card-title">King Size Beds</h3>
                  <div className="card-btn">
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <i className="fa fa-duotone fa-house-chimney"></i>
                  </div>
                  <h3 className="card-title">Smart Houses</h3>
                  <div className="card-btn">
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <i class="fa fa-solid fa-volleyball"></i>
                  </div>
                  <h3 className="card-title">Kid's Playland</h3>
                  <div className="card-btn">
                    <i class="fa fa-duotone fa-arrow-right"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec-padd">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 text-center">
              <p className="subtitles">News & Blogs</p>
              <h2 className="header-title">Latest News Feeds</h2>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <figure className="card-banner">
                <img src="https://codewithsadee.github.io/homeverse/assets/images/blog-1.png" className="w-100"/>
              </figure>
              <div className="blog-content">
                <div className="blog-content-top">
                  <ul className="card-meta-list">
                    <li>
                      <a href="#" className="card-meta-link">
                      <i class="fa fa-solid fa-user"></i>
                      <span>by : Admin</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="card-meta-link">
                      <i class="fa fa-solid fa-tags"></i>
                      <span>Interior</span>
                      </a>
                    </li>
                  </ul>
                  <h4 >The Most Inspiring Interior Design Of 2021</h4>
                </div>
                <div className="blog-content-bottom">
                  <div className="card-meta-link">
                  <i class="fa fa-solid fa-calendar"></i>
                  <span> Apr 05, 2024</span>
                  </div>
                  <div className="read">Read More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <figure className="card-banner">
                <img src="https://codewithsadee.github.io/homeverse/assets/images/blog-2.jpg" className="w-100"/>
              </figure>
              <div className="blog-content">
                <div className="blog-content-top">
                  <ul className="card-meta-list">
                    <li>
                      <a href="#" className="card-meta-link">
                      <i class="fa fa-solid fa-user"></i>
                      <span>by : Admin</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="card-meta-link">
                      <i class="fa fa-solid fa-tags"></i>
                      <span>Interior</span>
                      </a>
                    </li>
                  </ul>
                  <h4 >The Most Inspiring Interior Design Of 2021</h4>
                </div>
                <div className="blog-content-bottom">
                  <div className="card-meta-link">
                  <i class="fa fa-solid fa-calendar"></i>
                  <span> Apr 05, 2024</span>
                  </div>
                  <div className="read">Read More</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <figure className="card-banner">
                <img src="https://codewithsadee.github.io/homeverse/assets/images/blog-3.jpg" className="w-100"/>
              </figure>
              <div className="blog-content">
                <div className="blog-content-top">
                  <ul className="card-meta-list">
                    <li>
                      <a href="#" className="card-meta-link">
                      <i class="fa fa-solid fa-user"></i>
                      <span>by : Admin</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="card-meta-link">
                      <i class="fa fa-solid fa-tags"></i>
                      <span>Interior</span>
                      </a>
                    </li>
                  </ul>
                  <h4 >The Most Inspiring Interior Design Of 2021</h4>
                </div>
                <div className="blog-content-bottom">
                  <div className="card-meta-link">
                  <i class="fa fa-solid fa-calendar"></i>
                  <span> Apr 05, 2024</span>
                  </div>
                  <div className="read">Read More</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};
