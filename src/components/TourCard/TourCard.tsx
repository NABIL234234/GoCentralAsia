import React from 'react';
import styles from './TourCard.module.css';
import TourImg from "../../assets/Images/Tour.png";
import {MdAccessTimeFilled} from 'react-icons/md';
import {IoMdPeople} from 'react-icons/io';
import {RiMapPinFill} from 'react-icons/ri';

type TourCardProps = {
  price?: string;
  days: string;
  people?: string;
  countryPoint?: string;
  tourDescription: string;
  className?: string;
  style?: React.CSSProperties;
  SecondClassName?: string;
};

const TourCard: React.FC<TourCardProps> = ({
                                             people, days,
                                             price,
                                             countryPoint,
                                             tourDescription,
                                             className,
                                             style,
                                             SecondClassName
                                           }) => {
  return (
    <div className={`${styles.tour_card} ${className || ''}`}>
      <img src={TourImg} className={styles.tour_card_img} alt="Tour"/>
      {price && (
        <div className={styles.price}>
          <h4>{price}</h4>
        </div>
      )}
      <div className={`${styles.tour_info_block} ${SecondClassName || ''}`}
           style={style}>
        <div className={styles.days}>
          <MdAccessTimeFilled/>
          <h5>{days}</h5>
        </div>
        {people && (
          <>
            <span>|</span>
            <div className={styles.people}>
              <IoMdPeople/>
              <h5>{people}</h5>
            </div>
          </>
        )}
        {countryPoint && (
          <>
            <span>|</span>
            <div className={styles.country_point}>
              <RiMapPinFill/>
              <h5>{countryPoint}</h5>
            </div>
          </>
        )}
      </div>
      <div className={styles.tour_desc}>
        <h4>Alai Heights, Kyrgyzstan</h4>
        <p>{tourDescription}</p>
      </div>
    </div>
  );
};

export default TourCard;
