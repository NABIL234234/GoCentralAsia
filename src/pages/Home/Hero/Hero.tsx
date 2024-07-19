import React, {useEffect, useRef, useState} from 'react';
import './Hero.scss';

//components
import AdventureComponent from "../../../components/AdventureComponent/AdventureComponent.tsx";

//images
import Logo from "../../../assets/Images/Logo.png";

//icons
import { FaInstagram, FaWhatsapp, FaYoutube, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { CiMail, CiSearch } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiFlowArrow, PiHardDrives } from "react-icons/pi";

const Hero: React.FC = () => {
  const [isDestinationModalOpen, setDestinationModalOpen] = useState(false);
  const [isTourModalOpen, setTourModalOpen] = useState(false);


  const destinationModalRef = useRef<HTMLDivElement>(null);
  const tourModalRef = useRef<HTMLDivElement>(null);
  const clickRef = useRef<HTMLDivElement>(null);


  const handleDestinationClick = () => {
    setDestinationModalOpen(!isDestinationModalOpen);
    setTourModalOpen(false); // Закрыть туры, если открыто
  };

  const handleTourClick = () => {
    setTourModalOpen(!isTourModalOpen);
    setDestinationModalOpen(false); // Закрыть направления, если открыто
  };


  const handleClickOutside = (event: MouseEvent) => {
    if(clickRef.current && !clickRef.current.contains(event.target as Node)) {
      setDestinationModalOpen(false)
      setTourModalOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  },[])

  return (
    <section className="Hero">
      <div className="container">
        <div className="upper-header">
          <div className="contact-container">
            <div className="flex">
              <FaPhone />
              <a href="tel:+996700015599">+996 700 01 55 99</a>
            </div>
            <div className="flex2">
              <CiMail />
              <a href="mailto:Gocentralasia@gmail.com">Gocentralasia@gmail.com</a>
            </div>
            <div className="flex3">
              <HiOutlineQuestionMarkCircle />
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className="social-container">
            <FaInstagram />
            <FaWhatsapp />
            <FaYoutube />
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="header-row">
              <div className="logo-container">
                <img src={Logo} alt="logo" />
                <h2>Gocentralasia</h2>
              </div>
              <div className="navigation-container">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><span onClick={handleDestinationClick}>Destination <IoMdArrowDropdown /></span></li>
                  <li><span onClick={handleTourClick}>Tour <IoMdArrowDropdown /></span></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
                {(isDestinationModalOpen || isTourModalOpen) && (
                  <div className="dropdown_modals" ref={clickRef}>
                    {isDestinationModalOpen && (
                      <div className="dropdown_modal_destination" ref={destinationModalRef}>
                        <ul>
                          <li><a href="#">Central Asia</a></li>
                          <li><a href="#">Kyrgyzstan</a></li>
                          <li><a href="#">Kazakhstan</a></li>
                          <li><a href="#">Uzbekistan</a></li>
                        </ul>
                      </div>
                    )}
                    {isTourModalOpen && (
                      <div className="dropdown_modal_tour" ref={tourModalRef}>
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
              <div className="search_language-container">
                <div className="search-container">
                  <CiSearch />
                </div>
                <div className="language-container">
                  <h3>ENG</h3>
                  <IoMdArrowDropdown className="dropDown" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Landing_text">
          <h1>Group tours</h1>
          <p>Embark on Unforgettable Group Adventures</p>
          <button>View tours</button>
        </div>

        <div className="Adventure">
          <div className="adventure_title">
            <h3>Find your next adventure</h3>
          </div>
          <div className="adventure_sorting">
            <AdventureComponent icon={PiFlowArrow} title="Destination" />
            <AdventureComponent icon={FaCalendarAlt} title="Month" />
            <AdventureComponent icon={PiHardDrives} title="Types" />
            <button>Find</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
