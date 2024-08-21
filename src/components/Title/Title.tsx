import React from 'react';
import styles from './Title.module.css';


type TitleProps = {
  mainText: string;
  paragraph: string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ mainText, paragraph, className }) => {
  return (
    <div className={`${styles.titleText} ${className || ''}`}>
      <h2>{mainText}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Title;
