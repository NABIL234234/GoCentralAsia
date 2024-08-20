
import styles from './Footer.module.css';

// images
import Logo from "../../assets/Images/Logo.png";

// icons
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src={Logo} alt="Gocentralasia Logo" />
          <span>Gocentralasia</span>
        </div>
        <div className={styles.footerInfo}>
          <h4>Contact Information</h4>
          <a><AiOutlinePhone /> +996 700 01 55 99</a>
          <a><AiOutlineMail /> logo@gmail.com</a>
        </div>
        <div className={styles.footerLinks}>
          <h4>Main</h4>
          <ul>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/info">Info</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <h4>Travel Destination</h4>
          <ul>
            <li><a href="/kyrgyzstan">Kyrgyzstan</a></li>
            <li><a href="/kazakhstan">Kazakhstan</a></li>
            <li><a href="/uzbekistan">Uzbekistan</a></li>
            <li><a href="/tajikistan">Tajikistan</a></li>
            <li><a href="/turkmenistan">Turkmenistan</a></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <h4>Policy</h4>
          <ul>
            <li><a href="/payment-policy">Payment policy</a></li>
            <li><a href="/return-policy">Return policy</a></li>
            <li><a href="/service-terms">Service terms</a></li>
            <li><a href="/sitemap">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2024 Name All rights reserved</p>
        <div className={styles.footerSocial}>
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
