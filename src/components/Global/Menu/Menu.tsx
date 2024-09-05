import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import Logo from "../../../assets/Images/GreenLogo.jpg";
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
                <img src={Logo} alt="logo" />
                <h2>Gocentralasia</h2>
              </div>
              <span className={styles.closeButton} onClick={toggleMenu}>✕</span>
            </div>
            <ul>
              <li>
                <NavLink
                    to="/"
                    onClick={toggleMenu}
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.dropdown}>
                <span>Destination <IoMdArrowDropdown /></span>
                <ul className={styles.dropdownContent}>
                  <li>
                    <NavLink
                        to="/destination"
                        onClick={toggleMenu}
                        className={({ isActive }) => isActive ? styles.activeLink : ''}
                    >
                      Central Asia
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                        to="/destination/kyrgyzstan"
                        onClick={toggleMenu}
                        className={({ isActive }) => isActive ? styles.activeLink : ''}
                    >
                      Kyrgyzstan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                        to="/destination/kazakhstan"
                        onClick={toggleMenu}
                        className={({ isActive }) => isActive ? styles.activeLink : ''}
                    >
                      Kazakhstan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                        to="/destination/uzbekistan"
                        onClick={toggleMenu}
                        className={({ isActive }) => isActive ? styles.activeLink : ''}
                    >
                      Uzbekistan
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown}>
                <span>Tour <IoMdArrowDropdown /></span>
                <ul className={styles.dropdownContent}>
                  <li>
                    <NavLink
                        to="/adventure-tours"
                        onClick={toggleMenu}
                        className={({ isActive }) => isActive ? styles.activeLink : ''}
                    >
                      Adventure Tours
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                        to="/cultural-tours"
                        onClick={toggleMenu}
                        className={({ isActive }) => isActive ? styles.activeLink : ''}
                    >
                      Cultural Tours
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                        to="/nature-tours"
                        onClick={toggleMenu}
                        className={({ isActive }) => isActive ? styles.activeLink : ''}
                    >
                      Nature Tours
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                    to="/blog"
                    onClick={toggleMenu}
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/about-us"
                    onClick={toggleMenu}
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/contact-us"
                    onClick={toggleMenu}
                    className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Menu;
