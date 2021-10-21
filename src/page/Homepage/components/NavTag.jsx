import React, { useState } from "react";

export default function NavTag() {
  const [value1, setValue1] = useState("/");
  const [value2, setValue2] = useState("/");
  const [value3, setValue3] = useState("/");
  const [value4, setValue4] = useState("/");
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {"Tag <nav>:  Defines navigation links"}
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
          {"<nav>"} <br />
          <div style={{ padding: "0px 0px 0px 10px" }}>
            <div style={{ display: "inline-block" }}>
              {'<a href="'}
              <div
                style={{ display: "inline-block" }}
                contentEditable
                id="nav-1"
                spellCheck="false"
                suppressContentEditableWarning={true}
                onKeyUp={() =>
                  setValue1(document.getElementById("nav-1").innerHTML.trim())
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
              >
                /
              </div>
              {'">HTML</a> | '}
            </div>
            <div style={{ display: "inline-block" }}>
              {'<a href="'}
              <div
                style={{ display: "inline-block" }}
                contentEditable
                id="nav-2"
                spellCheck="false"
                suppressContentEditableWarning={true}
                onKeyUp={() =>
                  setValue2(document.getElementById("nav-2").innerHTML.trim())
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
              >
                /
              </div>
              {'">CSS</a> | '}
              <div style={{ display: "inline-block" }}>
                {'<a href="'}
                <div
                  style={{ display: "inline-block" }}
                  contentEditable
                  id="nav-3"
                  spellCheck="false"
                  suppressContentEditableWarning={true}
                  onKeyUp={() =>
                    setValue3(document.getElementById("nav-3").innerHTML.trim())
                  }
                  onKeyPress={(e) => {
                    if (e.key === "Enter") e.preventDefault();
                  }}
                >
                  /
                </div>
                {'">JavaScript</a> | '}
                <div style={{ display: "inline-block" }}>
                  {'<a href="'}
                  <div
                    style={{ display: "inline-block" }}
                    contentEditable
                    id="nav-3"
                    spellCheck="false"
                    suppressContentEditableWarning={true}
                    onKeyUp={() =>
                      setValue4(
                        document.getElementById("nav-3").innerHTML.trim()
                      )
                    }
                    onKeyPress={(e) => {
                      if (e.key === "Enter") e.preventDefault();
                    }}
                  >
                    /
                  </div>
                  {'">Python</a>'}
                </div>
              </div>
            </div>
          </div>
          {"</nav>"}
        </div>
        <h3>Output: </h3>
        <nav style={{ borderStyle: "groove", width: "80%" }}>
          <a href={value1}>HTML</a> | <a href={value2}>CSS</a> |
          <a href={value3}>JavaScript</a> | <a href={value4}>Python</a>
        </nav>
      </div>
    </div>
  );
}
