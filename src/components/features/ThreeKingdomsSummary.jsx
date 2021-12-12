import React from "react";

const Kingdoms = [
  {
    hanzi: "蜀漢",
    eng: "Shu-Han",
    description: `Create customized popups and show the message at the lorem`,
  },
  {
    hanzi: "魏",
    eng: "Wei",
    description: `Collect website leads with embedded forms and integrate easily.`,
  },
  {
    hanzi: "呉",
    eng: "Wu",
    description: `Send welcome email to your new subscribers with a code.`,
  },
];

const ThreeKingdomsSummary = () => {
  return (
    <div className="row justify-content-center">
      {Kingdoms.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-thirteen">
            <div>
              <h1>{val.hanzi}</h1>
            </div>
            <h2 className="title font-rubik">{val.eng}</h2>
            <p>{val.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeKingdomsSummary;
