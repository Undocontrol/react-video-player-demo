import React, { createContext, useState } from 'react';
import './App.css';
export const Context = createContext({});

function VideoPlayer() {
  const [video, setVideo] = useState();
  return (
    <main className="videoPlayer">
        <video 
            onPlay={ () => setVideo({isPlaying: true })} 
            onPause={ () => setVideo({isPlaying: false })} 
            width="400" controls
        >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
            <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg"/>
            Your browser does not support HTML5 video.
      </video>
    </main>
  );
}

export default VideoPlayer
