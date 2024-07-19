import './Footer.scss';

//images
import Logo from "../../assets/Images/Logo.png"

//icons
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Gocentralasia Logo" />
          <p>Gocentralasia</p>
        </div>
        <div className="footer-info">
          <h4>Contact Information</h4>
          <p><AiOutlinePhone /> +996 700 01 55 99</p>
          <p><AiOutlineMail /> logo@gmail.com</p>
        </div>
        <div className="footer-links">
          <h4>Main</h4>
          <ul>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/info">Info</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Travel Destination</h4>
          <ul>
            <li><a href="/kyrgyzstan">Kyrgyzstan</a></li>
            <li><a href="/kazakhstan">Kazakhstan</a></li>
            <li><a href="/uzbekistan">Uzbekistan</a></li>
            <li><a href="/tajikistan">Tajikistan</a></li>
            <li><a href="/turkmenistan">Turkmenistan</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Policy</h4>
          <ul>
            <li><a href="/payment-policy">Payment policy</a></li>
            <li><a href="/return-policy">Return policy</a></li>
            <li><a href="/service-terms">Service terms</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Name All rights reserved</p>
        <div className="footer-social">
          <FaFacebookF />
          <FaWhatsapp />
          <FaTelegramPlane />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer;
