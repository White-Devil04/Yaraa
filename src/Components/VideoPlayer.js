import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import video1 from './../Assets/new1.mp4';
import video2 from './../Assets/new2.mp4';
import video3 from './../Assets/new3.mp4';
import video4 from './../Assets/new4.mp4';
import video5 from './../Assets/new5.mp4';

function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [video1, video2, video3, video4, video5];

  const handleVideoEnd = () => {
    const nextVideoIndex = currentVideoIndex + 1;
    if (nextVideoIndex < videos.length) {
      setCurrentVideoIndex(nextVideoIndex);
    } else {
      // Optionally handle what happens when all videos have played
      console.log('All videos have played');
    }
  };

  // Removed the useEffect hook that was adding event listeners directly to the video element

  return (
    <ReactPlayer
      url={videos[currentVideoIndex]}
      playing
      controls
      onEnded={handleVideoEnd} // Use the onEnded prop to handle video end
      height='100%'
    />
  );
}

export default VideoPlayer;