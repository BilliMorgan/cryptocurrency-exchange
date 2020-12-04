import React from "react";
import "./CurSection.css";

import Trade from "../Trade/Trade";
import Details from "../../conteiners/Details/Details";

const CurSection = () => {
  return (
    <div className="section">
      <Details />
      <Trade />
    </div>
  );
};
export default CurSection;
