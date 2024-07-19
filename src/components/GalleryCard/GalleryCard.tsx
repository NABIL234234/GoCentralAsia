import React from 'react';
import './GalleryCard.scss'

type TourTypesCardProps = {
  backgroundImage: string;
}

const TourTypesCard: React.FC<TourTypesCardProps> = ({ backgroundImage}) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`
  }
  return (
    <div className="tour_type_card" style={style}>
    </div>
  );
};

export default TourTypesCard;