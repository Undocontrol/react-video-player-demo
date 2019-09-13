/**
 * This displays the title of the vidoe which is passed in from 
 * our Context.
 */
import React, { useContext } from 'react';
import { VideoContext } from '../contexts/VideoContext';
import './styles.scss';

const VideoTitle = () => {
  const [context] = useContext(VideoContext);
  return (
    <header className="header">
      <h1>{context.video.title}</h1>
    </header>
  );
}

export default VideoTitle