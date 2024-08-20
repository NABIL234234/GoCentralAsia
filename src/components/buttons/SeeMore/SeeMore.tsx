import React from "react";
import style from './SeeMore.module.css';

type SeeMoreProps = {
  title: string;
  className?: string;
};

const SeeMore: React.FC<SeeMoreProps> = ({ title, className }) => {
  return (
    <button className={`${style.button} ${className || ''}`}>
      {title}
    </button>
  );
};

export default SeeMore;
