import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import video1 from './../Assets/new1.mp4';
import video2 from './../Assets/new2.mp4';
import video3 from './../Assets/new3.mp4';
import video4 from './../Assets/new4.mp4';
import video5 from './../Assets/new5.mp4';

function VideoPlayer({ flag, setFlag }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [video1, video2, video3, video4, video5];
  
  useEffect(() => {
    if (!flag) {
      setCurrentVideoIndex(0); // Start playing the first video when the flag is false
    }
  },[flag]);
  
  const handleVideoEnd = () => {
    const nextVideoIndex = currentVideoIndex + 1;
    if (nextVideoIndex < videos.length) {
      setCurrentVideoIndex(nextVideoIndex);
    } else {
      setFlag(true); // Change the flag to true when all videos have been played
    }
  };


  // Removed the useEffect hook that was adding event listeners directly to the video element

  return (
    <div className="HRVideo">
      <ReactPlayer
      url={videos[currentVideoIndex]}
      playing={!flag} // Only play the video when the flag is false
      onEnded={handleVideoEnd}
    />
    </div>
  );
}

export default VideoPlayer;