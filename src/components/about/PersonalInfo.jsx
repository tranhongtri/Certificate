import React from "react";

const personalInfoContent = [
  { meta: "English name", metaInfo: "Josh", hasColor: "" },
  { meta: "Vietnamese name", metaInfo: "Tran Hong Tri", hasColor: "" },
  // { meta: "Age", metaInfo: "33 Years", hasColor: "" },
  // { meta: "Nationality", metaInfo: "Vietnam", hasColor: "" },
  { meta: "Address", metaInfo: "District 7, HCMC", hasColor: "" },
  // { meta: "City", metaInfo: "HCMC", hasColor: "" },
  { meta: "phone", metaInfo: "0333 421 255", hasColor: "" },
  { meta: "Email", metaInfo: "tranhongtri@gmail.com", hasColor: "" },
  { meta: "Skype", metaInfo: "live:.cid.ca714cc08910883b", hasColor: "" },
  // { meta: "langages", metaInfo: "Vietnamese, English", hasColor: "green" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
