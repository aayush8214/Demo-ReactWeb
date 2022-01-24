import React, { useState } from "react";
import HowtoUse from "./API/HowtoUse.js";

const AboutUs = () => {
    const [data,setData]=useState(HowtoUse);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img
                src="https://source.unsplash.com/random/1080x1920/?wallpaper,phone"
                alt="About US"
              />
            </div>
            {/* Section right side data */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE GOOGLE AND IOS APPS ONLY
              </h3>
              <h1 className="main-heading">How to use the app?</h1>
              <div className="row our-services-info">
                {data.map((elem) => {
                  return (
                    <>
                      <div className="col-1 our-services-number">{elem.id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{elem.title}</h2>
                        <p className="main-hero-para">
                          {elem.info}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------------------------------second part-------------------------------------------------------- */}
      <section className="common-section our-services our-services-rightside-content">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
                -- MULTI-LANGUAGE SUPPORT
              </h3>
              <h1 className="main-heading">WORLD CLASS SUPPORT<br/> 24*7 AVAILABLE</h1>
              <div className="row our-services-info">
                {data.map((elem) => {
                  return (
                    <>
                      <div className="col-1 our-services-number">{elem.id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{elem.title}</h2>
                        <p className="main-hero-para">
                          {elem.info}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
            {/* Section right side data */}
            <div className="col-12 col-lg-5 our-service-rightside-img">
              <img
                src="https://source.unsplash.com/random/1080x1920/?wallpaper,phone"
                alt="About US"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
