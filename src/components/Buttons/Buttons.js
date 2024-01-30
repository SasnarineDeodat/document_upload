import React from "react";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="Buttons-parent">
      <p>
        Data in the import file is correct. Please press Continue to import.
      </p>
      <div className="btns">
        <button className="btn1">Continue import</button>
        <button className="btn2">Cancel</button>
      </div>
    </div>
  );
};
export default Buttons;
