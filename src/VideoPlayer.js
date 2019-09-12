import React, { useContext, useState } from 'react';
import './App.css';
import { VideoContext } from './contexts/VideoContext';

const VideoPlayer = () => {
    const [video, setVideo] = useContext(VideoContext);
    return (
        <main className="videoPlayer">
            <video 
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
