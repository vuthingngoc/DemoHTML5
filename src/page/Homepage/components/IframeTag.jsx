import React, { useState } from "react";

export default function IframeTag() {
  const [src, setSrc] = useState("https://www.youtube.com/embed/-VB7Q6Y1-tw");
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(500);
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {"Tag <iframe>:  Defines youtube video"}
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
          {'<iframe src="'}
          <div style={{ display: "inline-block" }}>
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="iframe-src"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setSrc(document.getElementById("iframe-src").innerHTML)
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              https://www.youtube.com/embed/-VB7Q6Y1-tw
            </div>
            {'" width="'}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="iframe-width"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setWidth(document.getElementById("iframe-width").innerHTML)
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              900
            </div>
            {'px" height="'}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="iframe-height"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setHeight(document.getElementById("iframe-height").innerHTML)
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              500
            </div>
            {'px">'}
          </div>
        </div>
        <h3>Output: </h3>
        <iframe
          src={src}
          title="Youtube video"
          style={{
            borderStyle: "groove",
            width: `${width}px`,
            height: `${height}px`,
          }}
        />
      </div>
    </div>
  );
}
