import React from "react";
import "./App.css";
import styled from "styled-components";

const InputSocial = ({ name, setName, signature, setSignature }) => {
  return (
    <StyledWrapper style={{ display: "flex", gap: "16px" }}>
      <div className="group">
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <span className="highlight" />
        <span className="bar" />
        <label>이름 (15자 미만)</label>
      </div>
      <div className="group">
        <input
          required
          type="text"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          className="input"
        />
        <span className="highlight" />
        <span className="bar" />
        <label>서명 (영문 지원)</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    position: relative;
  }

  .input {
    font-size: 16px;
    padding: 5px 5px 5px 5px;
    display: block;
    outline: none;
    width: 170px;
    border: none;
    border-bottom: 1px solid #999;
    color: #faf9f6;
    background: transparent;
  }

  .input:focus,
  .input:focus-visible {
    outline: none !important ;
  }

  label {
    color: #999;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 5px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .input:focus ~ label,
  .input:valid ~ label {
    top: -15px;
    font-size: 14px;
    color: #999;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #faf9f6;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  .input:focus ~ .bar:before,
  .input:focus ~ .bar:after {
    width: 50%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export default InputSocial;
