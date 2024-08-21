import React from 'react';
import styles from './PopularTourCard.module.css';
import TourImg from "../../assets/Images/Tour.png";
import {MdAccessTimeFilled} from 'react-icons/md';
import {RiMapPinFill} from 'react-icons/ri';

type PopularTourCardProps = {
  days: string;
  countryPoint: string;
  tourDescription: string;
  className?: string;
};

const PopularTourCard: React.FC<PopularTourCardProps> = ({days, countryPoint, tourDescription, className}) => {
  return (
    <div className={`${styles.tour_card} ${className}`}>
      <img src={TourImg} alt="Tour" className={styles.tour_card_img}/>
      <div className={styles.tour_info_block}>
        <div className={styles.days}>
          <MdAccessTimeFilled/>
          <h5>{days}</h5>
        </div>
        |
        <div className={styles.country_point}>
          <RiMapPinFill/>
          <h5>{countryPoint}</h5>
        </div>
      </div>
      <div className={styles.tour_desc}>
        <h4>Alai Heights, Kyrgyzstan</h4>
        <p>{tourDescription}</p>
      </div>
    </div>
  );
};

export default PopularTourCard;
