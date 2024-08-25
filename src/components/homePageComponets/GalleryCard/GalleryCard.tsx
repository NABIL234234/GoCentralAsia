import React from 'react';
import styles from './GalleryCard.module.css';

interface GalleryCardProps {
  backgroundImage: string;
  className?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ backgroundImage, className }) => {
  return (
    <div
      className={`${styles.gallery_card} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default GalleryCard;
