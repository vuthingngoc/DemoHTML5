import React, { useState } from "react";

export default function MeterTag() {
  const [value1, setValue1] = useState(4);
  const [value2, setValue2] = useState(0.6);
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {
          "Tag <meter>:  Defines a scalar measurement within a known range (a gauge)"
        }
      </h3>
      <div style={{ marginLeft: "30px" }}>
        <h3>Input: </h3>
        <div
          style={{
            padding: "5px 5px 5px 5px",
            borderStyle: "groove",
            width: "80%",
          }}
        >
          {'<label for="loading1">Loading 1: </label>'} <br />
          <div style={{ display: "inline-block" }}>
            {'<meter id="loading1" value="'}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="meter-1"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setValue1(document.getElementById("meter-1").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              4
            </div>
            {'" min="0" max="10" />'}
          </div>
          <br />
          {'<label for="loading2">Loading 2: </label>'} <br />
          <div style={{ display: "inline-block" }}>
            {'<meter id="loading2" value="'}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="meter-2"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setValue2(document.getElementById("meter-2").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              0.6
            </div>
            {'" />'}
          </div>
        </div>
        <h3>Output: </h3>
        <div style={{ borderStyle: "groove", width: "80%" }}>
          <label htmlFor="loading1">Loading 1: </label>
          <meter id="loading1" value={value1} min="0" max="10" />
          <br />
          <label htmlFor="loading2">Loading 2: </label>
          <meter id="loading2" value={value2} />
        </div>
      </div>
    </div>
  );
}
