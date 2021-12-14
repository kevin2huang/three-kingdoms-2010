import React from "react";
import { Link } from "react-router-dom";
import CharacterTabs from "./CharacterTabs";

const Characters = () => {
  return (
    <div className="main-page-wrapper">
      {/*  =============================================
				Fancy Hero One
			============================================== */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-11 m-auto">
              <h2 className="font-rubik">三国英雄</h2>
            </div>
            <div className="col-xl-9 col-lg-11 m-auto">
              <p className="font-rubik">
                Heroes of the Three Kingdoms
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-hero-one */}

      {/* =====================================================
				Team Section One
			===================================================== */}
      <div className="team-section-one">
        <div className="container">
          <CharacterTabs />
        </div>
      </div>
      {/* /.team-section-one */}

      {/* =====================================================
           	Fancy Short Banner Eleven
        ===================================================== */}
      <div className="fancy-short-banner-eleven bg-color mt-70 mb-50 md-mb-20 md-mt-30">
        <div className="container">
          <div className="clearfix">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <h2
                  className="font-rubik"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Want to be a part of our talented team?
                </h2>
                <Link
                  className="theme-btn-one btn-lg mt-50 md-mt-30"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  to="/contact-cs"
                >
                  SEND YOUR CV
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <img
          src="images/shape/212.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/213.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* /.fancy-short-banner-eleven */}
    </div>
  );
};

export default Characters;
