import React from 'react';
import styles from './TourTypeCard.module.css';

type TourTypesCardProps = {
  title: string;
  backgroundImage: string;
};

const TourTypesCard: React.FC<TourTypesCardProps> = ({ title, backgroundImage }) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className={styles.tourTypeCard} style={style}>
      <h5>{title}</h5>
    </div>
  );
};

export default TourTypesCard;
