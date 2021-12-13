import React from "react";

const Kingdoms = [
  {
    hanzi: "蜀漢",
    eng: "Shu-Han",
    description: `Founded by Liu Bei, Shu Han become an empire when it conquered Cao Wei in 236.`,
  },
  {
    hanzi: "魏",
    eng: "Wei",
    description: `Founded by Cao Cao's son, Cao Pi, when he proclaimed himself emperor in 220.`,
  },
  {
    hanzi: "呉",
    eng: "Wu",
    description: `Founded by Sun Jian's son, Sun Quan, when he proclaimed himself emperor in 229.`,
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
