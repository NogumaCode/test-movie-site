"use client"
import { useEffect, useRef } from "react";

interface VideoSampleProps {
  src: string;
  loop: boolean;
}

const VideoSample = ({src,loop}:VideoSampleProps) => {
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
        src={src}
        muted
        style={{ height: "100%", width: "100%" }}
        autoPlay
        loop={loop}
        playsInline
      />
</>


  );
};

export default VideoSample;
