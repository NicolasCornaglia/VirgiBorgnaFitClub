import './index.scss'
import danceVideo from '../../assets/videos/Video-BAILE.MP4'
import React, { useEffect, useRef } from "react";

const BackgroundVideo = () => {
   const videoEl = useRef(null);

   const attemptPlay = () => {
      videoEl &&
         videoEl.current &&
         videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
         });
   };

   useEffect(() => {
      attemptPlay();
   }, []);

   return (
      <>
         <div className='video-container'>
            <video
               className='video'
               id="background-video"
               playsInline
               loop
               muted
               controls
               alt="All the devices"
               src={danceVideo}
               ref={videoEl}
            />
         </div>
      </>
   )
}

export default BackgroundVideo