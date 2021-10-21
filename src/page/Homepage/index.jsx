import React from "react";
import ArticleTag from "./components/ArticleTag";
import AsideTag from "./components/AsideTag";
import AudioTag from "./components/AudioTag";
import BdiTag from "./components/BdiTag";
import DetailsTag from "./components/DetailTag";
import FigureTag from "./components/FigureTag";
import HgroupTag from "./components/HgroupTag";
import IframeTag from "./components/IframeTag";
import MarkTag from "./components/MarkTag";
import MeterTag from "./components/MeterTag";
import NavTag from "./components/NavTag";
import VideoTag from "./components/VideoTag";

export default function Article() {
  return (
    <>
      <ArticleTag />
      <AsideTag />
      <BdiTag />
      <DetailsTag />
      <FigureTag />
      <HgroupTag />
      <MarkTag />
      <MeterTag />
      <NavTag />
      <AudioTag />
      <VideoTag />
      <IframeTag />
      <div style={{ paddingBottom: "50px" }} />
    </>
  );
}
