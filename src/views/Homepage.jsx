import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header/Header";
import Hero from "../components/hero-banner/Hero";
import Characters from "../components/characters/Characters";
import About from "../components/about/About";
import FeatureNine from "../components/features/FeatureNine";
import FooterFour from "../components/footer/FooterFour";

const Homepage = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Three Kingdoms 2010</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Hero />
      {/* End Hero Banner Four */}

      <Characters />

      {/* 
     =============================================
				Fancy Text Block
		============================================== */}
      <div className="fancy-text-block-nineteen mt-250 mb-200 md-mt-150 md-mb-150">
        <div className="container">
          <About />
        </div>
      </div>
      {/* End  .fancy-text-block-nineteen*/}

      <div className="fancy-feature-nine">
        <img
          src="images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-60 md-mb-30">
            <h6>GET STARTED IN MINUTES</h6>
            <h2>
              <span>3 simple & easy step to launch.</span>
            </h2>
          </div>
          {/* End title */}

          <FeatureNine />
        </div>
      </div>
      {/* /.fancy-feature-nine */}

      {/* 
     =============================================
				Fqa Text Block
		============================================== */}
      <div className="fancy-text-block-six overflow-hidden mt-250 md-mt-200">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-five mb-35">
                <h6>Why choose us</h6>
                <h2>
                  <span>Why you should</span> choose us?
                </h2>
              </div>
              {/* End title */}
            </div>

            <div
              className="col-lg-6 col-md-8 m-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="illustration-holder d-flex justify-content-end md-mt-50">
                <img src="images/media/img_58.png" alt="media" />
                <img
                  src="images/shape/113.svg"
                  alt="media"
                  className="shapes shape-one"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
      </div>
      {/* /.why should you choose us */}

      {/* 
     =============================================
				Pricing Section Three
		============================================== */}
      <div className="pricing-section-three mt-250 mb-200 md-mt-150 md-mb-150">
        <img
          src="images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-50 md-mb-40">
            <h6>Our Pricing</h6>
            <div className="row">
              <div className="col-lg-9 m-auto">
                <h2>Unbeatable prices, no contracts, simple & easy</h2>
              </div>
            </div>
          </div>
          {/* /.pricing-table-area-three */}
        </div>
        {/* ./container */}
      </div>
      {/* /.pricing-section-three */}

      {/* 
     =============================================
				Client Feedback Slider
		============================================== */}
      <div className="client-feedback-slider-three mb-250 ">
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-50">
            <div className="row">
              <div className="col-lg-7 col-md-9 m-auto">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  <span>Check what’s our client </span>say about us.
                </h2>
              </div>
            </div>
          </div>
          {/* End title */}
        </div>
        {/* /.container */}
        <img
          src="images/media/img_59.png"
          alt="media"
          className="shapes shape_1"
        />
        <img
          src="images/media/img_60.png"
          alt="media"
          className="shapes shape_2"
        />
        <img
          src="images/media/img_61.png"
          alt="media"
          className="shapes shape_3"
        />
        <img
          src="images/media/img_62.png"
          alt="media"
          className="shapes shape_4"
        />
        <img
          src="images/media/img_63.png"
          alt="media"
          className="shapes shape_5"
        />
        <img
          src="images/media/img_64.png"
          alt="media"
          className="shapes shape_6"
        />
      </div>
      {/* /.client-feedback-slider-three */}

      {/*

      {/* 
     =============================================
			Footer Four
		============================================== */}
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <FooterFour />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer-content">
            <p>
              Copyright @{new Date().getFullYear()}{" "}
              <a
                href="https://themeforest.net/user/ib-themes/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                ib-themes
              </a>{" "}
              inc.
            </p>
          </div>
          {/* /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-four */}
    </div>
  );
};

export default Homepage;
