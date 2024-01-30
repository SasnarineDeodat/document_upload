import React, { useState } from "react";
import "./Switch.css";

const Switch = ({ isOn }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <label
        style={{ background: isOn && "#134461" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
