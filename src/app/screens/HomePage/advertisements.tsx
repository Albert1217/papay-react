import { Container } from "@mui/material";
import React from "react";

export function Advertisements() {
  return (
    <div className="ads_restaurant_frame">
      <video
        className={"ads_video"}
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media=""
      >
        <source src="./video/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
