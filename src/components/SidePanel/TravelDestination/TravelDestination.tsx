import React from 'react';
import styles from "./TravelDestination.module.css";

type TravelDestinationProps = {
  title?: string;
  items: string[];  // Массив элементов
  className?: string;
}

const TravelDestination: React.FC<TravelDestinationProps> = ({ items, title = "Destinations", className }) => {
  return (
    <div className={`${styles.TravelDestinations} ${className}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Итерируем каждый item
        ))}
      </ul>
    </div>
  );
};

export default TravelDestination;
