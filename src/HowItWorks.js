import React, { useState } from "react";
import workapi from "./API/Work";

const HowItWorks = () => {
  const [data, setData] = useState(workapi);
  return (
    <>
      <section >
        <div className="work-container container mt-5">
          <h1 className="main-heading text-center">How Does It Work?</h1>
          <div className="row">
            {data.map((elem) => {
            //   return (
            //     <div className="col-12 col-lg-4 text-center work-container-subdiv">
            //       <i class={`fontawesome-style ${elem.logo}`}></i>
            //       <h2 className="sub-heading">{elem.title}</h2>
            //       <p className="main-hero-para w-100">
            //         {elem.info}
            //       </p>
            //     </div>
            //   );
            //   ------------------------------------------OR------------------------------------------
            const {id , logo , title , info } = elem;
            return (
                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                  <i class={`fontawesome-style ${logo}`}></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="main-hero-para w-100">
                    {info}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
