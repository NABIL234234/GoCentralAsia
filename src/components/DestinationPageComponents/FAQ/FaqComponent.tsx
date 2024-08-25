import styles from './FaqComponent.module.css';
import FAQItem from "./FAQItem/FAQItem.tsx";

const FaqComponent = () => {
  return (
    <div className={styles.faqContainer}>
      <h2>FAQ on Kyrgyzstan</h2>
      <div className={styles.questionList}>
        <FAQItem
          question="How to book a tour on this website?"
          answer="You can book a tour by selecting the desired package and following the booking process on the website."
        />
        <FAQItem
          question="Do I have to pay any extra cost?"
          answer="No, all costs are included in the tour package, unless explicitly stated otherwise."
        />
        <FAQItem
          question="How to cancel the tour that I’ve booked?"
          answer="You can cancel your tour by contacting our support team or using the cancellation option in your account."
        />
        <FAQItem
          question="What is the refund policy?"
          answer="The refund policy varies depending on the tour package. Please refer to the terms and conditions for more details."
        />
      </div>
    </div>
  );
};

export default FaqComponent;
