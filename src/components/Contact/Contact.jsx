import './Contact.css'

import ExternalLinks from '../ExternalLinks/ExternalLinks.jsx';

// #Images
import youtube_image from '../../assets/youtube_image.svg';
import instagram_image from '../../assets/instagram_image.svg';
import facebook_image from '../../assets/facebook_image.png'
import phone_image from '../../assets/phone_image.png';
import email_image from '../../assets/email.png'
import MKE_SkyMedia_text from '../../assets/MKE SKYMEDIA _text (2).png'


function Contact() {
  return (
    <section className="contact">
      <div className="contact__container_main">
        <div className='contact__social'>   
          <h2>Social Media Contacts:</h2>
            <ExternalLinks 
              className="contact__social_links" 
              href="https://youtube.com/@mkeskymedia">
                <img 
                className="contact__social_links_image" 
                src={youtube_image} 
                alt="Youtube Image" />
                @mkeskymedia 
            </ExternalLinks>
            <ExternalLinks 
              className="contact__social_links" 
              href="https://www.instagram.com/mke_skymedia/">
                <img 
                className="contact__social_links_image contact__social_links_image-position" 
                src={instagram_image} 
                alt="Instagram Image" />
                mke_skymedia
            </ExternalLinks>
            <ExternalLinks 
              className="contact__social_links" 
              href="https://www.facebook.com/people/MKE-Skymedia/61589590333014/">
                <img 
                className="contact__social_links_image contact__social_links_image-position" 
                src={facebook_image} 
                alt="Facebook Icon" />
                MKE Skymedia
            </ExternalLinks>
            <div className='contacts__social_number_email'>
              <img className="contact__social_links_image" src={email_image} alt="Email Icon" />
              <div className='contacts__social_email'>jramos414@hotmail.com</div>
            </div>
            <div className='contacts__social_number_email'>
              <img className="contact__social_links_image" src={phone_image} alt="Phone Icon" />
                <div className='contacts__social_number_position 
                contacts__social_number_position-query'>(414) 439-3570</div>      
            </div>
            
        </div>
        <div className="contacts__social_image_wrap">
  <img
    className="contacts__social_image_text"
    src={MKE_SkyMedia_text}
    alt="MKE SkyMedia Text"
  />
</div>
      </div>
    </section>
  )
}

export default Contact
