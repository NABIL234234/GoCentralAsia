import React from 'react';
import './TourTypeCard.scss'



type TourTypesCardProps = {
  title: string;
  backgroundImage: string;
}

const TourTypesCard: React.FC<TourTypesCardProps> = ({title , backgroundImage}) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`
  }
  return (
    <div className="tour_type_card" style={style}>
      <h5>{title}</h5>
    </div>
  );
};

export default TourTypesCard;