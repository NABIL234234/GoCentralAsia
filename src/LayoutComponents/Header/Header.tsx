import styles from './Header.module.css';
import {FaPhone} from 'react-icons/fa';
import {CiMail, CiSearch} from 'react-icons/ci';
import {HiOutlineQuestionMarkCircle} from 'react-icons/hi';
import {FaInstagram, FaWhatsapp, FaYoutube} from 'react-icons/fa';
import Logo from '../../assets/Images/GreenLogo.jpg';
import {IoMdArrowDropdown} from 'react-icons/io';
import  {useState} from "react";
import Menu from '../../components/Menu/Menu.tsx';  // Импортируем компонент меню

function Header() {
  const [isDestinationModalOpen, setDestinationModalOpen] = useState(false);
  const [isTourModalOpen, setTourModalOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDestinationClick = () => {
    setDestinationModalOpen(!isDestinationModalOpen);
    setTourModalOpen(false); // Закрыть туры, если открыто
  };

  const handleTourClick = () => {
    setTourModalOpen(!isTourModalOpen);
    setDestinationModalOpen(false); // Закрыть направления, если открыто
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.upperHeader}>
          <div className={styles.contactContainer}>
            <div className={styles.flex}>
              <FaPhone/>
              <a href="+996 700 01 55 99">+996 700 01 55 99</a>
            </div>
            <div className={styles.flex2}>
              <CiMail/>
              <a href="mailto:Gocentralasia@gmail.com">Gocentralasia@gmail.com</a>
            </div>
            <div className={styles.flex3}>
              <HiOutlineQuestionMarkCircle/>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <FaInstagram/>
            <FaWhatsapp/>
            <FaYoutube/>
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.headerRow}>
            <div className={styles.logoContainer}>
              <img src={Logo} alt="logo"/>
              <h2>Gocentralasia</h2>
            </div>
            <div className={styles.navigationContainer}>
              <ul>
                <li><a href="#">Home</a></li>
                <li><span onClick={handleDestinationClick}>Destination <IoMdArrowDropdown/></span></li>
                <li><span onClick={handleTourClick}>Tour <IoMdArrowDropdown/></span></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className={styles.search_languageContainer}>
              <div className={styles.searchContainer}>
                <CiSearch className={styles.searchIcon}/>
              </div>
              <div className={styles.languageContainer}>
                <h3>ENG</h3>
                <IoMdArrowDropdown className={styles.dropDown}/>
              </div>
            </div>
            <div>
              <button className={`${styles['burger-btn']} ${menuOpen ? styles['open'] : ''}`} onClick={toggleMenu}>
                <span className={`${styles.line} ${menuOpen ? styles['line1'] : ''}`}></span>
                <span className={`${styles.line} ${menuOpen ? styles['line2'] : ''}`}></span>
                <span className={`${styles.line} ${menuOpen ? styles['line3'] : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      </div>
    </header>
  );
}

export default Header;
