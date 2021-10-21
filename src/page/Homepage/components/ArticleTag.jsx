import React, { useState } from "react";

export default function ArticleTag() {
  const [articleH2, setArticleH2] = useState("Trung Nguyễn");
  const [articleP, setArticleP] = useState("MSSV: SE140309, CLASS: SE1417");
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>{"Tag <article>:  Defines an article"}</h3>
      <div style={{ marginLeft: "30px" }}>
        <h3>Input: </h3>
        <div
          style={{
            padding: "5px 5px 5px 5px",
            borderStyle: "groove",
            width: "80%",
          }}
        >
          {"<article>"} <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<h2>"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="article-h2"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setArticleH2(document.getElementById("article-h2").innerHTML)
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              Trung Nguyễn
            </div>
            {"</h2>"}
          </div>
          <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<p>"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="article-p"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setArticleP(
                  document.getElementById("article-p").innerHTML.trim()
                )
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              MSSV: SE140309, CLASS: SE1417
            </div>
            {"</p>"}
          </div>
          <br />
          {"</article>"}
        </div>
        <h3>Output: </h3>
        <article style={{ borderStyle: "groove", width: "80%" }}>
          <h2>{articleH2}</h2>
          <p>{articleP}</p>
        </article>
      </div>
    </div>
  );
}
