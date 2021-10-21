import React, { useState } from "react";

export default function DetailsTag() {
  const [detailsSummary, setDetailsSummary] = useState("Bí mật");
  const [detailsP, setDetailsP] = useState("Chó là bạn không phải là tôi...");
  const [tag, setTag] = useState("summary");

  const checkTag = () => {
    switch (tag) {
      case "h1":
        return <h1>{detailsSummary}</h1>;
      case "h2":
        return <h2>{detailsSummary}</h2>;
      case "h3":
        return <h3>{detailsSummary}</h3>;
      case "h4":
        return <h4>{detailsSummary}</h4>;
      case "h5":
        return <h5>{detailsSummary}</h5>;
      case "h6":
        return <h6>{detailsSummary}</h6>;
      case "h7":
        return <h7>{detailsSummary}</h7>;
      case "h8":
        return <h8>{detailsSummary}</h8>;
      case "p":
        return <p>{detailsSummary}</p>;
      case "div":
        return <div>{detailsSummary}</div>;
      case "button":
        return <button>{detailsSummary}</button>;
      case "li":
        return <li>{detailsSummary}</li>;
      case "article":
        return <article>{detailsSummary}</article>;
      case "aside":
        return <aside>{detailsSummary}</aside>;
      case "title":
        return <title>{detailsSummary}</title>;
      case "details":
        return <details>{detailsSummary}</details>;
      case "input":
        return <input value={detailsSummary} />;
      case "header":
        return <header>{detailsSummary}</header>;
      default:
        return <summary>{detailsSummary}</summary>;
    }
  };

  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {
          "Tag <details>: Defines additional details that the user can view or hide"
        }
      </h3>
      <h3 style={{ color: "blue" }}>
        {"Tag <summary>: Defines a visible heading for a details element"}
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
          {"<details>"} <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="tag-detail"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setTag(document.getElementById("tag-detail").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              summary
            </div>
            {">"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="summary"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setDetailsSummary(
                  document.getElementById("summary").innerHTML.trim()
                )
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              Bí mật
            </div>
            {`</${tag}>`}
          </div>
          <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {"<p>"}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="p-t"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setDetailsP(document.getElementById("p-t").innerHTML.trim())
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              Chó là bạn không phải là tôi...
            </div>
            {"<p>"}
          </div>
          <br />
          {"</details>"}
        </div>
        <h3>Output: </h3>
        <details style={{ borderStyle: "groove", width: "80%" }}>
          {checkTag()}
          <p>{detailsP}</p>
        </details>
      </div>
    </div>
  );
}
