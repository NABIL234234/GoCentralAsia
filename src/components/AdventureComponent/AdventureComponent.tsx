import React from 'react';
import styles from './AdventureComponent.module.css';
import { IconType } from 'react-icons';
import { IoMdArrowDropdown } from "react-icons/io";

type AdventureComponentProps = {
  icon: IconType;
  title: string;
};

const AdventureComponent: React.FC<AdventureComponentProps> = ({ icon: Icon, title }) => {
  return (
    <div className={styles.destination}>
      <div className={styles.destinationTitle}>
        <Icon />
        <h5>{title}</h5>
      </div>
      <div className={styles.destinationSelect}>
        <h5>Choose</h5>
        <IoMdArrowDropdown  />
      </div>
    </div>
  );
};

export default AdventureComponent;
