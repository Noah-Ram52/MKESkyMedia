import './Main.css'
import city from '../../assets/home_image.jpg'
import mkeSkyMediaVideo from '../../assets/MKE_-_Reel.mp4'

function Main() {
  return (
    <main className="main">
      <div className="main__container-top">
        <img className="main__image" src={city} alt="MKE SKYMEDIA Main" />
        <div className="main__image-overlay"></div>
        <div className="main__title main__title--top">
          <h1 className='main__title-text'>MKE SKYMEDIA</h1>
        </div>
        <div className="main__title main__title--bottom">
          <div className="main__bottom-line"></div>
        </div>
      </div>
      <div className='main__video-wrap'>
        <video className='main__video-size' controls width="100%">
          <source 
          className="main__video-source" 
          src={mkeSkyMediaVideo} 
          type="video/mp4" />
        </video>
      </div>
    </main>
  )
}

export default Main