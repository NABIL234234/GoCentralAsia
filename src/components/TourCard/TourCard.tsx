// TourCard.tsx
import React from 'react';
import styles from './TourCard.module.css';
import TourImg from "../../assets/Images/Tour.png";
import { MdAccessTimeFilled } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';
import { RiMapPinFill } from 'react-icons/ri';

type TourCardProps = {
  price?: string;
  days: string;
  people?: string;
  countryPoint: string;
  tourDescription: string;
  className?: string; // Новый пропс для стилей
};

const TourCard: React.FC<TourCardProps> = ({ price, days, people, countryPoint, tourDescription, className }) => {
  return (
    <div className={`${styles.tour_card} ${className}`}>
      <img src={TourImg} className={styles.tour_card_img} alt="Tour" />
      <div className={styles.price}>
        <h4>{price}</h4>
      </div>
      <div className={styles.tour_info_block}>
        <div className={styles.days}>
          <MdAccessTimeFilled />
          <h5>{days}</h5>
        </div>
        |
        <div className={styles.people}>
          <IoMdPeople />
          <h5>{people}</h5>
        </div>
        |
        <div className={styles.country_point}>
          <RiMapPinFill />
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

export default TourCard;
