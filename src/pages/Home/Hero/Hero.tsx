import React, {useEffect, useRef, useState} from 'react';
import styles from './Hero.module.css';

// компоненты
import AdventureComponent from "../../../components/homePageComponets/AdventureComponent/AdventureComponent.tsx";
import Menu from '../../../components/Global/Menu/Menu.tsx';  // Импортируем компонент меню

// изображения
import Logo from "../../../assets/Images/Logo.png";

// иконки
import {FaInstagram, FaWhatsapp, FaYoutube, FaPhone, FaCalendarAlt} from "react-icons/fa";
import {CiMail, CiSearch} from "react-icons/ci";
import {HiOutlineQuestionMarkCircle} from "react-icons/hi";
import {IoMdArrowDropdown} from "react-icons/io";
import {PiFlowArrow, PiHardDrives} from "react-icons/pi";

const Hero: React.FC = () => {
    const [isDestinationModalOpen, setDestinationModalOpen] = useState(false);
    const [isTourModalOpen, setTourModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);  // Состояние для бургер-меню

    const destinationModalRef = useRef<HTMLDivElement>(null);
    const tourModalRef = useRef<HTMLDivElement>(null);
    const clickRef = useRef<HTMLDivElement>(null);

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
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.upperHeader}>
                    <div className={styles.contactContainer}>
                        <div className={styles.flex}>
                            <FaPhone/>
                            <a href="tel:+996700015599">+996 700 01 55 99</a>
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
                                <li><span onClick={handleDestinationClick}>Destination <IoMdArrowDropdown/></span>
                                </li>
                                <li><span onClick={handleTourClick}>Tour <IoMdArrowDropdown/></span></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                            {(isDestinationModalOpen || isTourModalOpen) && (
                                <div className={styles.dropdownModals} ref={clickRef}>
                                    {isDestinationModalOpen && (
                                        <div className={styles.dropdownModalDestination} ref={destinationModalRef}>
                                            <ul>
                                                <li><a href="#">Central Asia</a></li>
                                                <li><a href="#">Kyrgyzstan</a></li>
                                                <li><a href="#">Kazakhstan</a></li>
                                                <li><a href="#">Uzbekistan</a></li>
                                            </ul>
                                        </div>
                                    )}
                                    {isTourModalOpen && (
                                        <div className={styles.dropdownModalTour} ref={tourModalRef}>
                                            <ul>
                                                <li><a href="#">Adventure Tours</a></li>
                                                <li><a href="#">Cultural Tours</a></li>
                                                <li><a href="#">Nature Tours</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className={styles.searchLanguageContainer}>
                            <div className={styles.searchContainer}>
                                <CiSearch className={styles.searchIcon}/>
                            </div>
                            <div className={styles.languageContainer}>
                                <h3>ENG</h3>
                                <IoMdArrowDropdown className={styles.dropDown}/>
                            </div>
                        </div>
                        <div className={styles.mobileNav}>
                            <div className={styles.searchContainer}>
                                <CiSearch className={styles.searchIcon2}/>
                            </div>
                            <button className={`${styles['burger-btn']} ${menuOpen ? styles['open'] : ''}`}
                                    onClick={toggleMenu}>
                                <span className={`${styles.line} ${menuOpen ? styles['line1'] : ''}`}></span>
                                <span className={`${styles.line} ${menuOpen ? styles['line2'] : ''}`}></span>
                                <span className={`${styles.line} ${menuOpen ? styles['line3'] : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
                <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/> {/* Рендерим меню в Hero */}
                <div className={styles.landingText}>
                    <h1>Group tours</h1>
                    <p>Embark on Unforgettable Group Adventures</p>
                    <button>View tours</button>
                </div>
                <div className={styles.adventure}>
                    <div className={styles.adventureTitle}>
                        <h3>Find your next adventure</h3>
                    </div>
                    <div className={styles.adventureSorting}>
                        <AdventureComponent icon={PiFlowArrow} title="Destination"/>
                        <AdventureComponent icon={FaCalendarAlt} title="Month"/>
                        <AdventureComponent icon={PiHardDrives} title="Types"/>
                        <button>Find</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
