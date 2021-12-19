import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ShuHan, Wei, Wu, Other } from "./CharacterData";

const CharacterTabs = () => {
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
                  <img src={item.img} alt="media" />
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
                  <img src={item.img} alt="media" />
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
                  <img src={item.img} alt="media" />
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
                  <img src={item.img} alt="media" />
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

export default CharacterTabs;