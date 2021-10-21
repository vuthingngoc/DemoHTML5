import React, { useState } from "react";

export default function FigureTag() {
  const [img, setImg] = useState(
    "https://i.pinimg.com/564x/59/e3/4f/59e34f84f9b3570ba4f933895adaabaa.jpg"
  );
  const [caption, setCaption] = useState("Dạ dạ dạ dạ");
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {
          "Tag <figure>:  Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc"
        }
      </h3>
      <h3 style={{ color: "blue" }}>
        {"Tag <figcaption>:  Defines a caption for a figure element"}
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
          {"<figure>"} <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<img src='"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="img"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setImg(document.getElementById("img").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              https://i.pinimg.com/564x/59/e3/4f/59e34f84f9b3570ba4f933895adaabaa.jpg
            </div>
            {"' alt='catMoan' width='300px' height='300px'/>"}
          </div>
          <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<figcaption>"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="fig"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setCaption(document.getElementById("fig").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              Dạ dạ dạ dạ
            </div>
            {"<figcaption>"}
          </div>
          <br />
          {"</figure>"}
        </div>
        <h3>Output: </h3>
        <figure style={{ borderStyle: "groove", width: "80%" }}>
          <img src={img} alt="catMoan" width="300px" height="300px" />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    </div>
  );
}
