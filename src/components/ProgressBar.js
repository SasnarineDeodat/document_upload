import React from "react";
import "./ProgressBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const ProgressBar = ({ completed }) => {
  return (
    <div className="progressBarContainer">
      <FontAwesomeIcon icon={faFile} className="progressBarIcon" />
      <div
        className="progressBarFiller"
        style={{ width: `${completed}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
