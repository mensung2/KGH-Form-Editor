import React from "react";
import "./buttonUpload.css";
import InputToggle from "./InputToggle";
import InputSocial from "./InputSocial";

const InputSection = ({
  selectedGroup,
  setSelectedGroup,
  handleImageUpload,
  handleButtonClick,
  fileInputRef,
  name,
  setName,
  signature,
  setSignature,
}) => {
  return (
    <div
      className="input"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "28px",
      }}
    >
      <InputSocial
        name={name}
        signature={signature}
        setName={setName}
        setSignature={setSignature}
      />
      <InputToggle
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <>
        <div>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleImageUpload}
            ref={fileInputRef}
            style={{ display: "none" }}
          />

          <button className="button button--pan" onClick={handleButtonClick}>
            <span>Upload</span>
          </button>
        </div>
      </>
    </div>
  );
};

export default InputSection;
