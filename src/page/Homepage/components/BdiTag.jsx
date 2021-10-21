import React, { useState } from "react";

export default function BdiTag() {
  const [li1, setLi1] = useState("TrungND");
  const [li2, setLi2] = useState("إيان");
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {
          "Tag <bdi>:  Isolates a part of text that might be formatted in a different direction from other text outside it"
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
          {"<ul>"} <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            <div style={{ marginLeft: "10px", display: "inline-block" }}>
              {"<li> User "}
              <div
                style={{ display: "inline-block" }}
                contentEditable
                id="li1"
                spellCheck="false"
                suppressContentEditableWarning={true}
                onKeyUp={() =>
                  setLi1(document.getElementById("li1").innerHTML.trim())
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
              >
                TrungND
              </div>
              {": 80 points</li>"}
            </div>
            <br />
            <div style={{ marginLeft: "10px", display: "inline-block" }}>
              {"<li> User "}
              <div
                style={{ display: "inline-block" }}
                contentEditable
                id="li2"
                spellCheck="false"
                suppressContentEditableWarning={true}
                onKeyUp={() =>
                  setLi2(document.getElementById("li2").innerHTML.trim())
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
              >
                إيان
              </div>
              {": 80 points</li>"}
            </div>
          </div>
          <br />
          {"</ul>"}
        </div>
        <h3>Output: </h3>
        <ul style={{ borderStyle: "groove", width: "80%" }}>
          <li>
            User {li1}: 80 points (This {"<li> tag"} without {"<bdi> tag"})
          </li>
          <li>
            User <bdi>{li2}</bdi>: 90 points (This {"<li> tag"} with{" "}
            {"<bdi> tag"})
          </li>
        </ul>
      </div>
    </div>
  );
}
