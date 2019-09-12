import React, { createContext, useState } from 'react';
import './App.css';
import VideoContextProvider from './contexts/VideoContext';
import VideoTitle from './VideoTitle';
import VideoDescription from './VideoDescription';
import VideoPlayer from './VideoPlayer';
import VideoControlBar from './VideoControlBar';
export const Context = createContext({});

function App() {
  const [video, setVideo] = useState({ isPlaying: false });

  return (
    <main className="videoPlayer">
      <VideoContextProvider>
        <VideoTitle></VideoTitle>
        <VideoPlayer></VideoPlayer>
        <VideoDescription></VideoDescription>
        <VideoControlBar></VideoControlBar>
      </VideoContextProvider>
    </main>
  );
}

export default App
