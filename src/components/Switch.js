import React, { useState } from "react";
import "./Switch.css";

const Switch = ({ isOn = false }) => {
  // provide a default value for isOn
  const [checked, setChecked] = useState(isOn);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="switch-container">
        <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <label
          style={{ background: checked && "#134461" }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
        <span style={{ marginLeft: 5 }} className="toggle_on">
          {checked ? "Toggle ON" : "Toggle OFF"} |
        </span>
        <div className="image-container">
          <img
            height={25}
            width={25}
            src="./clock.png"
            alt="Clock"
            className="clock_img"
          />
          <span className="image-text">Select Tolerance Level</span>
        </div>
      </div>
    </>
  );
};

export default Switch;
