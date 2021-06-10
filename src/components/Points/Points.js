import React from "react";
import "./Points.css";

import { RecordCircleFill } from "react-bootstrap-icons";

const Points = () => {
  return (
    <>
      <hr />
      <a href="/points">
        <RecordCircleFill className="points" />
        210 Ravensburger Points
      </a>
      <hr />
    </>
  );
};

export default Points;
