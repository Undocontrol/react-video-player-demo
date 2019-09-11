import React, { createContext, useState } from 'react';
import './App.css';
import VideoTitle from './VideoTitle';
import VideoDescription from './VideoDescription';
import VideoControlBar from './VideoControlBar';
const BASE_EMBED_URL = 'https://www.youtube.com/embed/';
export const Context = createContext({});

function videoPlayer() {
  //const [video, setVideo] = useState();
  return (
    <main className="videoPlayer">
      <VideoTitle></VideoTitle>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/a98LI-arNS4" 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
      </iframe>
      <VideoDescription></VideoDescription>
      <VideoControlBar></VideoControlBar>
    </main>
  );
}

export default videoPlayer
