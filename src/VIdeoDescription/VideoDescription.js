import React, { useContext } from 'react';
import { VideoContext } from './contexts/VideoContext';

function VideoDescription() {
  const [ context ] = useContext(VideoContext);
  return (
    <article className="description">
        <h2>{ context.video.description }</h2>
    </article>
  );

}

export default VideoDescription