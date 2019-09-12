import React, { Component, createContext } from 'react';

export const VideoContext = createContext();

class VideoContextProvider extends Component {
    state = {
        isPlaying: false,
        video: { 
            Title: 'Trippy', 
            Description: 'Weird floating white giant chases butterfly', 
            url: '' 
        }
    }
    render(){
        return (
            <VideoContext.Provider value={{...this.state}}>
                {this.props.children}
            </VideoContext.Provider>
        );
    }
}

export default VideoContextProvider;