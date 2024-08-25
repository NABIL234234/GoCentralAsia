import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import Menu from '../../components/Global/Menu/Menu.tsx';
import Logo from '../../assets/Images/GreenLogo.jpg';
import { FaInstagram, FaWhatsapp, FaYoutube, FaPhone } from 'react-icons/fa';
import { CiMail, CiSearch } from 'react-icons/ci';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';

function Header() {
  const [isDestinationModalOpen, setDestinationModalOpen] = useState(false);
  const [isTourModalOpen, setTourModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideBurger, setHideBurger] = useState(false);

  const destinationModalRef = useRef<HTMLDivElement>(null);
  const tourModalRef = useRef<HTMLDivElement>(null);
  const clickRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      if (!prev) {
        // Если меню закрыто, открываем его и скрываем кнопку через 1 секунду
        setHideBurger(false);
        return true;
      } else {
        // Если меню открыто, сразу скрываем кнопку
        setHideBurger(true);
        setTimeout(() => setHideBurger(false), 1000); // Показываем кнопку через 1 секунду
        return false;
      }
    });
  };

  const handleDestinationClick = () => {
    setDestinationModalOpen(!isDestinationModalOpen);
    setTourModalOpen(false); // Закрыть туры, если открыто
  };

  const handleTourClick = () => {
    setTourModalOpen(!isTourModalOpen);
    setDestinationModalOpen(false); // Закрыть направления, если открыто
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (clickRef.current && !clickRef.current.contains(event.target as Node)) {
      setDestinationModalOpen(false);
      setTourModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.upperHeader}>
          <div className={styles.contactContainer}>
            <div className={styles.flex}>
              <FaPhone />
              <a href="tel:+996700015599">+996 700 01 55 99</a>
            </div>
            <div className={styles.flex2}>
              <CiMail />
              <a href="mailto:Gocentralasia@gmail.com">Gocentralasia@gmail.com</a>
            </div>
            <div className={styles.flex3}>
              <HiOutlineQuestionMarkCircle />
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className={styles.socialContainer}>
            <FaInstagram />
            <FaWhatsapp />
            <FaYoutube />
          </div>
        </div>
        <div className={styles.headerRow}>
          <div className={styles.logoContainer}>
            <img src={Logo} alt="logo" />
            <h2>Gocentralasia</h2>
          </div>
          <div className={styles.navigationContainer}>
            <ul>
              <li><a className={styles.navigationLink} href="#">Home</a></li>
              <li><span onClick={handleDestinationClick}>Destination <IoMdArrowDropdown /></span></li>
              <li><span onClick={handleTourClick}>Tour <IoMdArrowDropdown /></span></li>
              <li><a className={styles.navigationLink} href="#">Blog</a></li>
              <li><a className={styles.navigationLink} href="#">About us</a></li>
              <li><a className={styles.navigationLink} href="#">Contact Us</a></li>
            </ul>
            {(isDestinationModalOpen || isTourModalOpen) && (
              <div className={styles.dropdownModals} ref={clickRef}>
                {isDestinationModalOpen && (
                  <div className={styles.dropdownModalDestination} ref={destinationModalRef}>
                    <ul>
                      <li><a className={styles.dropdownItem} href="#">Central Asia</a></li>
                      <li><a className={styles.dropdownItem} href="#">Kyrgyzstan</a></li>
                      <li><a className={styles.dropdownItem} href="#">Kazakhstan</a></li>
                      <li><a className={styles.dropdownItem} href="#">Uzbekistan</a></li>
                    </ul>
                  </div>
                )}
                {isTourModalOpen && (
                  <div className={styles.dropdownModalTour} ref={tourModalRef}>
                    <ul>
                      <li><a className={styles.dropdownItem} href="#">Adventure Tours</a></li>
                      <li><a className={styles.dropdownItem} href="#">Cultural Tours</a></li>
                      <li><a className={styles.dropdownItem} href="#">Nature Tours</a></li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.searchLanguageContainer}>
            <div className={styles.searchContainer}>
              <CiSearch className={styles.searchIcon} />
            </div>
            <div className={styles.languageContainer}>
              <h3>ENG</h3>
              <IoMdArrowDropdown className={styles.dropDown} />
            </div>
          </div>
          <div className={styles.mobileNav}>

            <button
              className={`${styles['burger-btn']} ${hideBurger ? styles['hidden'] : ''}`}
              onClick={toggleMenu}
            >
              <span className={`${styles.line} ${menuOpen ? styles['line1'] : ''}`}></span>
              <span className={`${styles.line} ${menuOpen ? styles['line2'] : ''}`}></span>
              <span className={`${styles.line} ${menuOpen ? styles['line3'] : ''}`}></span>
            </button>
          </div>
        </div>
        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;
