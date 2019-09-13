/**
 * This displays the description of the vidoe which is passed in from 
 * our Context.
 */
import React, { useContext } from 'react';
import { VideoContext } from '../Contexts/VideoContext';
import './styles.scss';

function VideoDescription() {
  const [context] = useContext(VideoContext);
  return (
    <article className="description">
      <h2>{context.video.description}</h2>
    </article>
  );

}

export default VideoDescription