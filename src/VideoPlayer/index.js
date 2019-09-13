import React, { useContext } from 'react';
import { VideoContext } from '../Contexts/VideoContext';
import './styles.scss';

const VideoPlayer = () => {
    const [context] = useContext(VideoContext);

    return (
        <section className="player">
            <video
                ref={context.videoRef}
                onPlay={() => context.setPlaying(true)}
                onPause={() => context.setPlaying(false)}
                onTimeUpdate={context.onTimeChange}
                width="700" controls
            >
                <source src={context.video.mp4} type="video/mp4" />
                <source src={context.video.ogg} type="video/ogg" />
                Your browser does not support HTML5 video.
            </video>
        </section>
    );
}

export default VideoPlayer;
