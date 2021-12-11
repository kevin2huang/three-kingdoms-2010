import React from "react";
import { Link } from "react-router-dom";
import FeaturesEight from "../features/FeaturesEight";
import PosterImage from "../../assets/images/poster.jpeg"

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="illustration-holder">
              <img
                src={PosterImage}
                alt="shape"
                className="illustration"
              />
            </div>
            {/* <p className="review-text">
              Over <span>150,000+ client</span> all over the world.
            </p> */}
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first">
            <div className="text-wrapper">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                <span>Event ticket</span> organiser & seller.
              </h1>
              <p
                className="sub-text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                For hassale free event, we are here to help you by creating
                online ticket.
              </p>
              <Link
                to="/login"
                className="theme-btn-five"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                {" "}
                Let’s get started
              </Link>
            </div>
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="fancy-feature-eight mt-160 md-mt-100">
        <div className="container">
          <div className="bg-wrapper">
            <FeaturesEight />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-eight */}
    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default HeroBannerFour;
