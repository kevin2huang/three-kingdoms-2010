import React from "react";
import { Link } from "react-router-dom";
import ThreeKingdomsSummary from "../features/ThreeKingdomsSummary";
import PosterImage from "../../assets/images/poster.jpeg"
import WordBank from "../word-bank/WordBank";

const Hero = () => {

  const headerSentenceChinese = WordBank[0].hanzi + 
                                WordBank[1].hanzi + 
                                WordBank[2].hanzi + 
                                WordBank[3].hanzi + 
                                WordBank[4].hanzi +
                                WordBank[5].hanzi +
                                ", " +
                                WordBank[6].hanzi +
                                WordBank[7].hanzi +
                                WordBank[8].hanzi +
                                WordBank[9].hanzi +
                                ", " + 
                                WordBank[9].hanzi +
                                WordBank[7].hanzi +
                                WordBank[8].hanzi +
                                WordBank[6].hanzi;
  
  const headerSentenceEnglish = "The empire, long divided, must unite; long united, must divide. Thus it has ever been.";

  return (
    <div className="hero-banner-four">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-last">
            <div className="hero-img">
              <img
                src={PosterImage}
                alt="shape"
                className="poster"
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
                {headerSentenceChinese}
              </h1>
              <p
                className="sub-text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {headerSentenceEnglish}
              </p>
              <div className="icon-center">
                <div className="mouse-scroll" data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"></div>
              </div>
            </div>
              
            {/* /.text-wrapper */}
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="fancy-feature-eight mt-80">
        <div className="container">
          <div className="bg-wrapper">
            <ThreeKingdomsSummary />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-eight */}
    </div>
  );
  //  {/* /.hero-banner-four */}
};

export default Hero;
