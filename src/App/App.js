/**
 * This will be the first page that is displayed and basically serves 	
 * as the wrapper component for every other component we’ll be creating subsequently.
 * 
 * I've created a VideoContextProvider component that will serve as the parent component 
 * to hold and manage the shared state.
*/	

import React from 'react';
import { VideoContextProvider } from '../contexts/VideoContext';
import VideoTitle from '../VideoTitle';
import VideoPlayer from '../VideoPlayer';
import VideoControlBar from '../VideoControlBar';
import VideoDescription from '../VideoDescription';
import './App.scss';

function App() {
  return (
    <main id="App" className="video-player">
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
