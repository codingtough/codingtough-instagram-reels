import React, { useRef, useState } from 'react';
import VideoHeader from '../VideoHeader';
import VideoFooter from '../VideoFooter';
import './Video.css';

function Video({ url, likes, shares, channel, avatarSrc, song }) {
   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
   const videoRef = useRef(null);

   const onVideoPress = () => {
      if(isVideoPlaying){
         videoRef.current.pause();
         setIsVideoPlaying(false);
      } else {
         videoRef.current.play();
         setIsVideoPlaying(true);
      }
   }

   return (
      <div className="video">
         <VideoHeader />
         <video
            onClick={onVideoPress}
            ref={videoRef}
            className="video__player"
            src={url}
            loop
            alt="Instagram reel video"
         ></video>
         <VideoFooter
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}
         />
      </div>
   )
}

export default Video;
