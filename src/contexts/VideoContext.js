import React, { useState, createContext } from 'react';

export const VideoContext = createContext();

export const VideoContextProvider = props => {
   const [video, setVideo] = useState({
        isPlaying: false,
        video: { 
            title: 'Trippy', 
            description: 'Weird floating white giant chases butterfly', 
            url: '' 
        }
    });
    return (
        <VideoContext.Provider value={[video, setVideo]}>
            {props.children}
        </VideoContext.Provider>
    );
}

export default VideoContextProvider;