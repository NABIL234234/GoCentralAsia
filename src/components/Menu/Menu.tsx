
import styles from './Menu.module.css';
import Logo from "../../assets/Images/GreenLogo.jpg";
import { IoMdArrowDropdown } from "react-icons/io";

interface MenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Menu = ({ menuOpen, toggleMenu }: MenuProps) => {
  return (
    <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
      <div>
        <div className={styles.menuWrapper}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <img src={Logo} alt="logo"/>
              <h2>Gocentralasia</h2>
            </div>
            <span className={styles.closeButton} onClick={toggleMenu}>✕</span>
          </div>
          <ul>
            <li><a href="#" onClick={toggleMenu}>Home</a></li>
            <li className={styles.dropdown}>
              <span>Destination <IoMdArrowDropdown/></span>
              <ul className={styles.dropdownContent}>
                <li><a href="#" onClick={toggleMenu}>Central Asia</a></li>
                <li><a href="#" onClick={toggleMenu}>Kyrgyzstan</a></li>
                <li><a href="#" onClick={toggleMenu}>Kazakhstan</a></li>
                <li><a href="#" onClick={toggleMenu}>Uzbekistan</a></li>
              </ul>
            </li>
            <li className={styles.dropdown}>
              <span>Tour <IoMdArrowDropdown/></span>
              <ul className={styles.dropdownContent}>
                <li><a href="#" onClick={toggleMenu}>Adventure Tours</a></li>
                <li><a href="#" onClick={toggleMenu}>Cultural Tours</a></li>
                <li><a href="#" onClick={toggleMenu}>Nature Tours</a></li>
              </ul>
            </li>
            <li><a href="#" onClick={toggleMenu}>Blog</a></li>
            <li><a href="#" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#" onClick={toggleMenu}>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
