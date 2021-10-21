import React, { useState } from "react";

export default function AsideTag() {
  const [asideH4, setAsideH4] = useState("Trung Nguyễn");
  const [asideP, setAsideP] = useState("MSSV: SE140309, CLASS: SE1417");
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {"Tag <aside>:  Defines content aside from the page content"}
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
          {"<aside>"} <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<h4>"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="aside-h4"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setAsideH4(document.getElementById("aside-h4").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              Trung Nguyễn
            </div>
            {"</h4>"}
          </div>
          <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<p>"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="aside-p"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setAsideP(document.getElementById("aside-p").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              MSSV: SE140309, CLASS: SE1417
            </div>
            {"<p>"}
          </div>
          <br />
          {"</aside>"}
        </div>
        <h3>Output: </h3>
        <aside style={{ borderStyle: "groove", width: "80%" }}>
          <h4>{asideH4}</h4>
          <p>{asideP}</p>
        </aside>
      </div>
    </div>
  );
}
