
import {FaPhone} from "react-icons/fa6";
import {CiMail, CiSearch} from "react-icons/ci";
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {FaInstagram, FaWhatsapp, FaYoutube} from "react-icons/fa";
import Logo from "../../assets/Images/Logo.png";
import {IoMdArrowDropdown} from "react-icons/io";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="upper-header">
          <div className="contact-container">
            <div className="flex">
              <FaPhone/>
              <a href="+996 700 01 55 99">+996 700 01 55 99</a>
            </div>
            <div className="flex2">
              <CiMail/>
              <a href="Gocentralasia@gmail.com">Gocentralasia@gmail.com</a>
            </div>
            <div className="flex3">
              <HiOutlineQuestionMarkCircle/>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className="social-container">
            <FaInstagram/>
            <FaWhatsapp/>
            <FaYoutube/>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="header-row">
              <div className="logo-container">
                <img src={Logo} alt="logo"/>
                <h2>Gocentralasia</h2>
              </div>
              <div className="navigation-container">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a>Desitination</a></li>
                  <li><a>Tour</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="search_language-container">
                <div className="search-container">
                  <CiSearch/>
                </div>
                <div className="language-container">
                  <h3>ENG</h3>
                  <IoMdArrowDropdown className="dropDown"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;