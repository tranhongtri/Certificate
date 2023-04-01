import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import cv from "../../../public/assets/img/cv.webp";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.png";
import Image from "next/image";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600">
              Learning Journey
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
        <hr className="separator mt-1" />
        <div className="row">
          {/* Personal Info Starts */}

          
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

      

        
      </div>
    </section>
  );
};

export default index;
