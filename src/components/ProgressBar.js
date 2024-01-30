import React from "react";
import "./ProgressBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Switch from "./Switch";

const ProgressBar = ({ completed, text, numbers }) => {
  return (
    <>
      {text && (
        <div className="progressBarContainer">
          <FontAwesomeIcon icon={faFile} className="progressBarIcon" />
          <span className="progressBarText">{text}</span>
          <span className="progressBarNumbers">{numbers}</span>

          <div
            className="progressBarFiller"
            style={{ width: `${completed}%` }}
          ></div>
        </div>
      )}
      <hr className="progress_bar_underline" />
      <hr className="progress_bar2_underline" />
      <p className="elapsed_text">
        Elapsed Data Checking:{" "}
        <span className="elapsed_dates">No Elapsed Dates!</span>
      </p>
      <hr className="progress_bar3_underline" />
      <div className="tolerance_window">
        <p>Tolerance Window:</p>
      </div>
      <Switch />
    </>
  );
};

export default ProgressBar;
