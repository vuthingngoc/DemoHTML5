import React, { useState } from "react";

export default function VideoTag() {
  const [src, setSrc] = useState(
    "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4"
  );
  const [controls, setControls] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [muted, setMuted] = useState(false);
  const [preload, setPreload] = useState("auto");
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(500);
  return (
    <div style={{ marginLeft: "30px" }}>
      <h3 style={{ color: "blue" }}>
        {"Tag <video>: Defines a video or movie"}
      </h3>
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
          {'<video controls="'}
          <div
            style={{ display: "inline-block" }}
            contentEditable
            id="video-controls"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() => {
              if (
                document.getElementById("video-controls").innerHTML === "false"
              )
                setControls(false);
              else if (
                document.getElementById("video-controls").innerHTML === "true"
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
            id="video-autoplay"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() => {
              if (
                document.getElementById("video-autoplay").innerHTML === "false"
              )
                setAutoplay(false);
              else if (
                document.getElementById("video-autoplay").innerHTML === "true"
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
            id="video-loop"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() => {
              if (document.getElementById("video-loop").innerHTML === "false")
                setLoop(false);
              else if (
                document.getElementById("video-loop").innerHTML === "true"
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
            id="video-muted"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() => {
              if (document.getElementById("video-muted").innerHTML === "false")
                setMuted(false);
              else if (
                document.getElementById("video-muted").innerHTML === "true"
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
            id="video-preload"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() =>
              setPreload(document.getElementById("video-preload").innerHTML)
            }
            onKeyPress={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          >
            auto
          </div>
          {'" width="'}
          <div
            style={{ display: "inline-block" }}
            contentEditable
            id="video-width"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() =>
              setWidth(document.getElementById("video-width").innerHTML)
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
            id="video-height"
            spellCheck="false"
            suppressContentEditableWarning={true}
            onKeyUp={() =>
              setHeight(document.getElementById("video-height").innerHTML)
            }
            onKeyPress={(e) => {
              if (e.key === "Enter") e.preventDefault();
            }}
          >
            500
          </div>
          {'px">'} <br />
          <div style={{ padding: "0px 0px 0px 20px", display: "inline-block" }}>
            {'<source src="'}
            <div
              style={{ display: "inline-block" }}
              contentEditable
              id="video-src"
              spellCheck="false"
              suppressContentEditableWarning={true}
              onKeyUp={() =>
                setSrc(document.getElementById("video-src").innerHTML)
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4
            </div>
            {'" />'}
          </div>
          <br />
          Your browser does not support HTML video.
          <br />
          {"</video>"}
        </div>
        <h3>Output: </h3>
        <video
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          preload={preload}
          style={{
            borderStyle: "groove",
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
  );
}
