import React, { useContext, useEffect, useState } from 'react';
import { VideoContext } from './contexts/VideoContext';

const ControlBar = () => {
  const [ context ] = useContext(VideoContext);

  const toggleVideo = () => {
    context.video.isPlaying ? context.videoRef.current.pause() : context.videoRef.current.play()
  }

  return (
    <footer className="controlBar">
        <div id="controls"> 
          <button id="toggle" onClick={toggleVideo}>
            {context.video.isPlaying ? 'Pause' : 'Play'}
          </button>
          <div id="progressBar"> 
              <div style={{width: `${context.video.progress}%`}}></div>
          </div>
        </div> 
    </footer>
  );
}

export default ControlBar
