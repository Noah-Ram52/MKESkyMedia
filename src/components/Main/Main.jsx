import './Main.css'
import city from '../../assets/home_image.jpg'

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
      <div className="main__video-wrap">
        <iframe
          className="main__video-embed"
          src="https://www.youtube.com/embed/7LlyxgAeXSE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  )
}

export default Main