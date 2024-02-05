"use client"
import { useEffect, useRef } from "react";

const VideoSample = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
<>
<video
        ref={videoRef}
        src="https://d1utppovu0gppp.cloudfront.net/input/op.mp4"
        muted
        style={{ height: "100%", width: "100%" }}
        autoPlay
        loop
        playsInline
      />
</>


  );
};

export default VideoSample;
