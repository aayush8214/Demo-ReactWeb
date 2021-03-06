import React, { useState } from "react";
import serviceapi from "./API/serviceApi";

const Services = () => {
  const [data, setData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How To Send Money
          </h1>
          <div className="row">
            {data.map((elem) => {
                const { id, title, logo, info} = elem;                              //object destructuring
              return (
                <>
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv wcs" key={id}>
                    <i className={`fontawesome-style lgi ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">
                      {info}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
