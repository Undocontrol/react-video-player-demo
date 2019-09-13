/**
 * This file uses the Context API and provider to essentially 
 * create global state that can be passed around in a React app.
 */
import React, { useState, createContext } from 'react';
//Creates a Context object.
export const VideoContext = createContext();
//We've declared a new state variable, which we'll call "video".
export const VideoContextProvider = props => {
   const [video, setVideo] = useState({
        isPlaying: false,
        title: 'Trippy', 
        description: 'Weird floating white giant/rabbit thing chases butterfly', 
        mp4: 'https://www.w3schools.com/html/mov_bbb.mp4',
        ogg: 'https://www.w3schools.com/html/mov_bbb.ogg',
        progress: 0
    });
    //Sets the video state to playing/paused.
    const setPlaying = value => {
        setVideo({...video, isPlaying: value})
    }
    //Ref gives you a reference to an element, in this case video.. 
    const videoRef = React.createRef();
    //which we use to watch the video progress so we can reflect that in the progress bar.
    const onTimeChange = event => {
        setVideo({...video, progress: Math.floor(videoRef.current.duration / 100 * videoRef.current.currentTime * 100) })
    }

    //saves as an object as there are lots of values that we are passing in. 
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