import React, { useState } from "react";

export default function HgroupTag() {
  const [h1Tag, setH1Tag] = useState("Baby Shark");
  const [h2Tag, setH2Tag] = useState("Baby Shark Du du du du");
  const [tag1, setTag1] = useState("h1");
  const [tag2, setTag2] = useState("h2");

  const setTag = (data, tag) => {
    switch (tag) {
      case "h1":
        return <h1>{data}</h1>;
      case "h2":
        return <h2>{data}</h2>;
      case "h3":
        return <h3>{data}</h3>;
      case "h4":
        return <h4>{data}</h4>;
      case "h5":
        return <h5>{data}</h5>;
      case "h6":
        return <h6>{data}</h6>;
      case "h7":
        return <h7>{data}</h7>;
      case "h8":
        return <h8>{data}</h8>;
      case "p":
        return <p>{data}</p>;
      case "div":
        return <div>{data}</div>;
      case "button":
        return <button>{data}</button>;
      case "li":
        return <li>{data}</li>;
      case "article":
        return <article>{data}</article>;
      case "aside":
        return <aside>{data}</aside>;
      case "title":
        return <title>{data}</title>;
      case "details":
        return <details>{data}</details>;
      case "input":
        return <input value={data} />;
      case "header":
        return <header>{data}</header>;
      default:
        return <h1>{data}</h1>;
    }
  };

  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {
          "Tag <hgroup>: Groups a set of h1 to h6 elements when a heading has multiple level"
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
          {"<hgroup>"} <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="tag1"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setTag1(document.getElementById("tag1").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              h1
            </div>
            {">"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="h1"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setH1Tag(document.getElementById("h1").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              Baby Shark
            </div>
            {`</${tag1}>`}
          </div>
          <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="tag-g-1"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setTag2(document.getElementById("tag-g-1").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              h2
            </div>
            {">"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="tag-g-2"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setH2Tag(document.getElementById("tag-g-2").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              Baby Shark Du du du du
            </div>
            {`<${tag2}>`}
          </div>
          <br />
          {"</aside>"}
        </div>
        <h3>Output: </h3>
        <hgroup style={{ borderStyle: "groove", width: "80%" }}>
          {setTag(h1Tag, tag1)}
          {setTag(h2Tag, tag2)}
        </hgroup>
      </div>
    </div>
  );
}
