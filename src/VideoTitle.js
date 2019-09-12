import React, { useState, useContext } from 'react';
import './App.css';
import { VideoContext } from './contexts/VideoContext';

const VideoTitle = () => {
  const [video] = useContext(VideoContext);
  return (
    <header className="header">
      <h1>{ video.video.title }</h1>
    </header>
  );

}

export default VideoTitle