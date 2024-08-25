import React, { useState } from 'react';
import styles from './FAQItem .module.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.questionContent}>
      <div className={styles.questionHeader} onClick={toggleOpen}>
        <span>{question}</span>
        {isOpen ? (
          <IoIosArrowUp className={styles.arrowIcon} />
        ) : (
          <IoIosArrowDown className={styles.arrowIcon} />
        )}
      </div>
      {isOpen && <div className={styles.answerContent}>{answer}</div>}
    </div>
  );
};

export default FAQItem;
