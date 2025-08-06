import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import footerlogo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">  
          <div className="col-12 col-sm-6 col-md-3">
            <img src={footerlogo} alt="Footer Logo" />
            <p>
                Comprehensive Care, All in One Place.Your health is Our priority.
            </p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />

              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h4>+01 123 456 7890</h4>
              </div>
            </div>
          </div>

          {/* عمود 2 */}
          <div className="col-12 col-sm-6 col-md-3">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Booking</a></li>
              <li><a href="#">Faq's</a></li>
              <li><a href="#">Our team</a></li>
            </ul>
          </div>

         
          <div className="col-12 col-sm-6 col-md-3">
            <h2>Our Services</h2>
            <ul>
              <li><a href="#">Dental Care</a></li>
              <li><a href="#">Cardiac Clinic</a></li>
              <li><a href="#">Massege Therapy</a></li>
              <li><a href="#">Cardiology</a></li>
              <li><a href="#">Precies Diagnosis</a></li>
              <li><a href="#">Abmbulance Services</a></li>
            </ul>
          </div>

   
          <div className="col-12 col-sm-6 col-md-3">
            <h2>Subscribe</h2>
            <form>
              <input type="email" placeholder="Email Address" />
              <button type="submit">Subscribe now</button>
              <span>+</span>
            </form>
            <ul className="social d-flex gap-2 mt-3">
                <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" />
                    </a>
                </li>
            </ul>

          </div>
        </div>
      </div>
      <div className="footer-buttom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                 <span>&copy; 2025 designed and developed by Care Coders MANSOURA HAKATHON. All rights reserved.</span>
                </div>
            </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
