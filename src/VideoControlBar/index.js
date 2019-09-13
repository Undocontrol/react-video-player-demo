/**
 * This takes care of the control bar and the progress bar.
 * Forwarding Refs gives a reference to an element, in this case the video.. 
 * which we use to watch the video progress so we can reflect that in the progress bar.
 */
import React, { useContext } from 'react';
import { VideoContext } from '../contexts/VideoContext';
import './styles.scss';

const ControlBar = () => {
  const [context] = useContext(VideoContext);

  const toggleVideo = () => {
    context.video.isPlaying ? context.videoRef.current.pause() : context.videoRef.current.play()
  };

  return (
    <footer className="control-bar">
      <div id="controls">
        <button className="toggle" onClick={toggleVideo}>
          {context.video.isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="progressBar">
          <div style={{ width: `${context.video.progress}%` }}></div>
        </div>
      </div>
    </footer>
  );
}

export default ControlBar;
