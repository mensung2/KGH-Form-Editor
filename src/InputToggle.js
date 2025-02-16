import React from "react";
import "./App.css";
import "./buttonToggle.css";

const InputToggle = ({ selectedGroup, setSelectedGroup }) => {
  return (
    <div className="toggle">
      <label>
        <input
          type="radio"
          name="group"
          checked={selectedGroup === "company"}
          readOnly
        />
        <span onClick={() => setSelectedGroup("company")}>회사</span>
      </label>
      <label>
        <input
          type="radio"
          name="group"
          checked={selectedGroup === "union"}
          readOnly
        />
        <span onClick={() => setSelectedGroup("union")}>조합</span>
      </label>
    </div>
  );
};

export default InputToggle;
