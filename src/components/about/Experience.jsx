import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: "React JS",
    compnayName: "Personal Projects",
    details: `Building websites with React JS`,
  },
  {
    year: "2017 - Present",
    position: "SQL & Mongo DB",
    compnayName: "TPF & Brickmate",
    details: `Writing queries to retrieve data & analyzing data`,
  },
  {
    year: "2012 - 2017",
    position: "VBA",
    compnayName: "ZALORA & TPF",
    details: `Built automation for Excel reports with VBA`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
