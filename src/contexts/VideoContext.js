import React, { useState, createContext } from 'react';

export const VideoContext = createContext();
export const VideoContextProvider = props => {
   const [video, setVideo] = useState({
        isPlaying: false,
        title: 'Trippy', 
        description: 'Weird floating white giant chases butterfly', 
        mp4: 'https://www.w3schools.com/html/mov_bbb.mp4',
        ogg: 'https://www.w3schools.com/html/mov_bbb.ogg',
        progress: 0
    });

    const setPlaying = value => {
        setVideo({...video, isPlaying: value})
    }

    const videoRef = React.createRef();

    const onTimeChange = event => {
        setVideo({...video, progress: Math.floor(videoRef.current.duration / 100 * videoRef.current.currentTime * 100) })
    }

    const context = {
        video,
        setVideo,
        setPlaying,
        videoRef,
        onTimeChange
    }
    
    return (
        <VideoContext.Provider value={[ context ]}>
            {props.children}
        </VideoContext.Provider>
    );
}

export default VideoContextProvider;