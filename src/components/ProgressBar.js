import React from "react";
import "./ProgressBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const ProgressBar = ({ completed, text, numbers }) => {
  return (
    <>
      <div className="progressBarContainer">
        <FontAwesomeIcon icon={faFile} className="progressBarIcon" />
        <span className="progressBarText">{text}</span>
        <span className="progressBarNumbers">{numbers}</span>

        <div
          className="progressBarFiller"
          style={{ width: `${completed}%` }}
        ></div>
      </div>
      <hr className="progress_bar_underline" />
      <hr className="progress_bar2_underline" />
      <p className="elapsed_text">Elapsed Data Checking:</p>
    </>
  );
};

export default ProgressBar;
