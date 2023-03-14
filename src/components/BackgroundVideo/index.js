import './index.scss'
import danceVideo from '../../assets/videos/Video-BAILE.MP4'

const BackgroundVideo = () => {

   document.getElementById('vid').play();

   return (
      <>
         <div className='video-container'>
            <video className='video' id="background-video vid" src={danceVideo} type="video/mp4" autoPlay loop muted />
         </div>
      </>
   )
}

export default BackgroundVideo