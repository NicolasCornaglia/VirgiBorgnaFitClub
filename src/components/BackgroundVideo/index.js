import React from 'react';
import './index.scss';
import danceVideo from '../../assets/videos/Video-BAILE.MP4';

const BackgroundVideo = () => (
   <>
      <div className='video-container'>
         <video className='video' id="background-video" src={danceVideo} type="video/mp4" autoPlay loop muted />
      </div>
   </>
);

export default BackgroundVideo;
