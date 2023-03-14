import './index.scss'
import danceVideo from '../../assets/videos/Video-BAILE.MP4'

const BackgroundVideo = () => {
   return (
      <>
         <div className='video-container'>
            <video className='video' id="background-video" src={danceVideo} type="video/mp4" autoPlay loop muted playsInline allowsInlineMediaPlayback webkit-playsinline="true" webkit-playsInline="true"/>
         </div>
      </>
   )
}

export default BackgroundVideo