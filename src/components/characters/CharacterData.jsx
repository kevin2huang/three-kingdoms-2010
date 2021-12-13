import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ShuHan = [
  { img: "img_07", mingzi: "劉備 (玄德)", name: "Liu Bei (Xuande)" },
  { img: "img_08", mingzi: "關羽 (雲長)", name: "Guan Yu (Yunchang)" },
  { img: "img_09", mingzi: "張飛 (益德)", name: "Zhang Fei (Yide)" },
  { img: "img_10", mingzi: "趙雲 (子龍)", name: "Zhao Yun (Zilong)" },
  { img: "img_10", mingzi: "諸葛亮 (孔明)", name: "Zhuge Liang (Kongming)" },
  { img: "img_10", mingzi: "馬超 (孟起)", name: "Ma Chao (Mengqi)" },
  { img: "img_10", mingzi: "劉協 (伯和)", name: "Liu Xie (Bohe)" },
];

const Wei = [
  { img: "img_12", mingzi: "曹操 (孟德)", name: "Cao Cao (Mengde)" },
  { img: "img_12", mingzi: "曹丕 (子桓)", name: "Cao Pi (Zihuan)" },
  { img: "img_12", mingzi: "司馬懿 (仲達)", name: "Sima Yi (Zhongda)" },
];

const Wu = [
  { img: "img_07", mingzi: "孫堅 (文臺)", name: "Sun Jian (Wentai)" },
];

const Other = [
  { img: "img_12", mingzi: "董卓 (仲穎)", name: "Dong Zhuo (Zhongying)" },
];

const CharacterData = () => {
  return (
    <>
      <Tabs>
        <TabList className="controls d-flex align-items-center justify-content-center mb-100 md-mb-60">
          <Tab>
            <button type="button" className="control">
              Shu-Han
            </button>
          </Tab>
          <Tab>
            <button type="button" className="control">
              Wei
            </button>
          </Tab>
          <Tab>
            <button type="button" className="control">
              Wu
            </button>
          </Tab>
          <Tab>
            <button type="button" className="control">
              Other
            </button>
          </Tab>
          {/* <Tab>
            <button type="button" className="control">
              Marketing
            </button>
          </Tab> */}
        </TabList>
        {/* End .Tablist */}
        <TabPanel>
          <div className="mixitUp-container">
            {ShuHan.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.mingzi}</h4>
                  <strong>{item.name}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
        <TabPanel>
          <div className="mixitUp-container">
            {Wei.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.mingzi}</h4>
                  <strong>{item.name}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
        <TabPanel>
          <div className="mixitUp-container">
            {Wu.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.mingzi}</h4>
                  <strong>{item.name}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
        <TabPanel>
          <div className="mixitUp-container">
            {Other.map((item, i) => (
              <Link to="/team-details-v1" className="mix" key={i}>
                <div className="team-member">
                  <img src={`images/media/${item.img}.png`} alt="media" />
                  <h4>{item.mingzi}</h4>
                  <strong>{item.name}</strong>
                </div>
                {/* /.team-member */}
              </Link>
            ))}

            <div className="gap"></div>
            <div className="gap"></div>
            <div className="gap"></div>
          </div>
          {/* /.mixitUp-container */}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default CharacterData;
