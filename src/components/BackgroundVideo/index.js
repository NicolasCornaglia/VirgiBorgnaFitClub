import React, { useState } from 'react';
import './index.scss';
import danceVideo from '../../assets/videos/home-video.mp4';
import thumb from '../../assets/img/thumb.jpg';

const BackgroundVideo = () => {
   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

   const onLoadedData = () => {
      setIsVideoLoaded(true);
   };

   return (
      <>
         <div className='video-container'>
            <img
               src={thumb}
               className="video-thumb tiny"
               alt="thumb"
               style={{ opacity: isVideoLoaded ? 0 : 1 }}
            />
            <video
               className='video'
               id="background-video"
               src={danceVideo}
               type="video/mp4"
               autoPlay
               playsInline
               loop
               muted
               onLoadedData={onLoadedData}
               style={{ opacity: isVideoLoaded ? 1 : 0 }}
            />
         </div>
      </>
   );
};

export default BackgroundVideo;
