import React, { useContext } from 'react';
import { VideoContext } from './contexts/VideoContext';

const VideoTitle = () => {
  const [ context ] = useContext(VideoContext);
  return (
    <header className="header">
      <h1>{ context.video.title }</h1>
    </header>
  );
}

export default VideoTitle