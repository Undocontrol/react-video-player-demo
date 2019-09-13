import React, { createContext, useState } from 'react';
import './App.scss';
import {VideoContextProvider} from './contexts/VideoContext';
import VideoTitle from './VideoTitle';
import VideoDescription from './VideoDescription';
import VideoPlayer from './VideoPlayer';
import VideoControlBar from './VideoControlBar';

function App() {
  return (
    <main className="video-player">
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
