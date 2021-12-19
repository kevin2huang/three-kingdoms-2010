import React from "react";
import ThreeKingdomsSummary from "../features/ThreeKingdomsSummary";
import PosterImage from "../../assets/images/poster.jpeg"
import WordBank from "../word-bank/WordBank";

const Hero = () => {

  const headerSentenceChinese1 = WordBank[0].hanzi + 
                                WordBank[1].hanzi + 
                                WordBank[2].hanzi + 
                                WordBank[3].hanzi + 
                                WordBank[4].hanzi +
                                WordBank[5].hanzi;

  const headerSentenceChinese2 = WordBank[6].hanzi +
                                  WordBank[7].hanzi +
                                  WordBank[8].hanzi +
                                  WordBank[9].hanzi;

  const headerSentenceChinese3 = WordBank[9].hanzi +
                                  WordBank[7].hanzi +
                                  WordBank[8].hanzi +
                                  WordBank[6].hanzi;
  
  const headerSentenceEnglish1 = "The Empire";
  const headerSentenceEnglish2 = "Long Divided, Must Unite";
  const headerSentenceEnglish3 = "Long United, Must Divide";

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
              <p>source: imdb</p>
            </div>
            {/* <p className="review-text">
              Over <span>150,000+ client</span> all over the world.
            </p> */}
          </div>
          {/* End .col */}

          <div className="col-lg-6 order-lg-first">
            <div className="text-wrapper">
              <h1 data-aos="fade-up" data-aos-duration="1200">
                {headerSentenceChinese1}<br/>
                {headerSentenceChinese2}<br/>
                {headerSentenceChinese3}
              </h1>
              <p
                className="sub-text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                {headerSentenceEnglish1}<br/>
                {headerSentenceEnglish2}<br/>
                {headerSentenceEnglish3}
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
