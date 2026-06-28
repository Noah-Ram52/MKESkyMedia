import "./About.css"

import holdCamera from "../../assets/pointing_camera.jpg"
import standing from "../../assets/standingMan.jpg"
import MKESkyMediaTextOnly from "../../assets/MKE SKYMEDIA _text_only.png"

function About() {
  return (
    <section className="about">
        <div className="about__empty-space">
            <img 
            className="about__empty-space-title" 
            src={MKESkyMediaTextOnly} 
            alt="MKE Skymedia Text" 
            loading="eager"
            fetchpriority="high"/>
        </div>
      <div className="about__container">
        <div className="about__text">
          <h2 className="about__text-title">WE TAKE PICTURES FROM ABOVE</h2>
          <p className="about__text-information">
            Welcome to Skymedia. I&#39;m Javier Ramos, the photographer, videographer, and FAA Part 107 licensed drone pilot behind the lens. As a licensed commercial drone pilot, I capture stunning, high-definition aerial imagery. From the iconic Milwaukee skyline to the hidden gems in our surrounding neighborhoods, I am passionate about capturing the heartbeat of this city through premium photography and videography.
            Utilizing cutting-edge aerial and ground gear, I specialize in creating smooth, cinematic content that brings properties, projects, and brands to life. 
            Whether I'm flying a dronehundreds of feet in the air or framing a shot on the ground, my goal is always the same: to deliver crisp, cinematic visuals that tell a compelling story.
            With a deep love for Milwaukee, I am constantly inspired by our city&#39;s unique blend of
            historic architecture, vibrant lakefront, and hardworking community. MKE Skymedia is my way of showcasing the beauty, energy, and growth of the place I call home, while helping local businesses and creators elevate their visual branding.
            When I&#39;m not busy managing facilities or spending time with my family, you can find me
            behind the camera, exploring new coastal and urban destinations, perfecting my craft, and
            keeping up with the latest in digital media tech.
          </p>
        </div>
        <div className="about__image-container">
         <img className="about__image" src={holdCamera} alt="Holding Camera" />
         <img className="about__image" src={standing} alt="Standing with Camera" />
        </div>
      </div>
    </section>
  )
}

export default About