import React, { useState } from "react";

export default function AudioTag() {
  const [src, setSrc] = useState("https://media1.vocaroo.com/mp3/16GxER5lZXAN");
  const [controls, setControls] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [muted, setMuted] = useState(false);
  const [preload, setPreload] = useState("auto");
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>{"Tag <audio>: Defines sound content"}</h3>
      <div style={{ marginLeft: "30px" }}>
        <h3>Input: </h3>
        <div
          style={{
            padding: "5px 5px 5px 5px",
            borderStyle: "groove",
            width: "80%",
            display: "inline-block",
          }}
        >
          {'<audio controls="'}
          <div
            style={{ display: "inline-block" }}
            contentEditable
            id="audio-controls"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() => {
              if (
                document.getElementById("audio-controls").innerHTML === "false"
              )
                setControls(false);
              else if (
                document.getElementById("audio-controls").innerHTML === "true"
              )
                setControls(true);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          >
            true
          </div>
          {'" autoplay="'}
          <div
            style={{ display: "inline-block" }}
            contentEditable
            id="audio-autoplay"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() => {
              if (
                document.getElementById("audio-autoplay").innerHTML === "false"
              )
                setAutoplay(false);
              else if (
                document.getElementById("audio-autoplay").innerHTML === "true"
              )
                setAutoplay(true);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          >
            false
          </div>
          {'" loop="'}
          <div
            style={{ display: "inline-block" }}
            contentEditable
            id="audio-loop"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() => {
              if (document.getElementById("audio-loop").innerHTML === "false")
                setLoop(false);
              else if (
                document.getElementById("audio-loop").innerHTML === "true"
              )
                setLoop(true);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          >
            false
          </div>
          {'" muted="'}
          <div
            style={{ display: "inline-block" }}
            contentEditable
            id="audio-muted"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() => {
              if (document.getElementById("audio-muted").innerHTML === "false")
                setMuted(false);
              else if (
                document.getElementById("audio-muted").innerHTML === "true"
              )
                setMuted(true);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          >
            false
          </div>
          {'" preload="'}
          <div
            style={{ display: "inline-block" }}
            contentEditable
            id="audio-preload"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() =>
              setPreload(document.getElementById("audio-preload").innerHTML)
            }
            onKeyPress={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          >
            auto
          </div>
          {'">'} <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {'<source src="'}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="audio-src"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setSrc(document.getElementById("audio-src").innerHTML)
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              https://media1.vocaroo.com/mp3/16GxER5lZXAN
            </div>
            {'" />'}
          </div>
          <br />
          Your browser does not support the audio element.
          <br />
          {"</audio>"}
        </div>
        <h3>Output: </h3>
        <audio
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          preload={preload}
          style={{ borderStyle: "groove", width: "80%" }}
        >
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
