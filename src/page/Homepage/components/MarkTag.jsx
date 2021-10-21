import React, { useState } from "react";

export default function MarkTag() {
  const [mark, setMark] = useState("mất đà");
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {"Tag <mark>:  Defines marked/highlighted text"}
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
          <div style={{ display: "inline-block" }}>
            {"<p> Bước tới đèo ngang bỗng <mark>"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="pMark"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setMark(document.getElementById("pMark").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              mất đà
            </div>
            {"</mark>"}
            {"</p>"}
          </div>
        </div>
        <h3>Output: </h3>
        <p style={{ borderStyle: "groove", width: "80%" }}>
          Bước tới đèo ngang bỗng <mark>{mark}</mark>
        </p>
      </div>
    </div>
  );
}
