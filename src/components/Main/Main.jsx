import './Main.css'
import bridge from '../../assets/main__test.jpg'

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <img className="main__image" src={bridge} alt="MKE SKYMEDIA Main" />

        <div className="main__image-overlay"></div>

        <div className="main__title main__title--top">
          <h1>MKE SKYMEDIA</h1>
        </div>
        <div className="main__title main__title--bottom">
        </div>
      </div>
    </main>
  )
}

export default Main