import React, { useState, useContext } from 'react';
import './App.css';
import { VideoContext } from './contexts/VideoContext';

function VideoDescription() {
  const [video] = useContext(VideoContext);
  return (
    <article className="description">
        <h2>{ video.video.description }</h2>
    </article>
  );

}

export default VideoDescription