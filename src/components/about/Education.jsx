import React from "react";

const educationContent = [
  {
    year: "2017 - Present",
    degree: "Project Management",
    institute: "TPF & Brickmate",
    details: `Managing various types of projects such as internal system, production projects, financial projects, web application projects and mobile app projects`,
  },
  {
    year: "2012 - 2017",
    degree: "English",
    institute: "ZALORA & TPF",
    details: `Enhancing English skills and got the chance to work in Australia in 2017`,
  },
  {
    year: "2008 - 2011",
    degree: "BACHELOR OF COMMERCE DEGREE",
    institute: "RMIT University",
    details: `Achieve High Distinction degree`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
