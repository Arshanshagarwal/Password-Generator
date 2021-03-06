import React from "react";
import "./toggles.css";

function Toggles(props) {
  return (
    <div className="toggle-box">
      <div className="toggle1 toggle">
        <input
          type="checkbox"
          id="t1"
          checked={props.state.upperCase}
          className="type-toggle"
          name="upperCase"
          onChange={(e) => props.handleCheckbox(e)}
        />
        <label for="t1" className="check">
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 18 18"
            className="toggle-svg"
          >
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
        <label className="toggle-labels">UpperCase</label>
      </div>

      <div className="toggle2 toggle">
        <input
          type="checkbox"
          id="t2"
          checked={props.state.lowerCase}
          className="type-toggle"
          name="lowerCase"
          onChange={(e) => props.handleCheckbox(e)}
        />
        <label for="t2" className="check">
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 18 18"
            className="toggle-svg"
          >
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
        <label className="toggle-labels">LowerCase</label>
      </div>

      <div className="toggle3 toggle">
        <input
          type="checkbox"
          id="t3"
          className="type-toggle"
          name="numeric"
          onChange={(e) => props.handleCheckbox(e)}
        />
        <label for="t3" className="check">
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 18 18"
            className="toggle-svg"
          >
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
        <label className="toggle-labels">Digits</label>
      </div>

      <div className="toggle4 toggle">
        <input
          type="checkbox"
          id="t4"
          className="type-toggle"
          name="symbol"
          onChange={(e) => props.handleCheckbox(e)}
        />
        <label for="t4" className="check">
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 18 18"
            className="toggle-svg"
          >
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
        <label className="toggle-labels">Symbols</label>
      </div>
    </div>
  );
}

export default Toggles;
