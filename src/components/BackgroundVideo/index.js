import './index.scss'
import danceVideo from '../../assets/videos/Video-BAILE.MP4'

const BackgroundVideo = () => {
   return (
      <>
         <div className='video-container'>
            <video id="background-video" src={danceVideo} type="video/mp4" autoPlay loop muted className='video' />
         </div>
      </>
   )
}

export default BackgroundVideo