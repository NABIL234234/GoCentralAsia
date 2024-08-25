import styles from "../../Home/Testimonial/Testimonial.module.css";
import JennyWilsonImg from "../../../assets/Images/JennyWilson.png";
import {FaStar} from "react-icons/fa";
import Title from "../../../components/Global/Title/Title.tsx";
import BrooklynSimmonsImg from "../../../assets/Images/BrooklynSimmons.png";
import RobertFoxImg from "../../../assets/Images/RobertFox.png";



const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.container}>
        <Title mainText="TESTIMONIAL" paragraph="What travelers say about us"/>
        <div className={styles.testimonial_cards}>
          <div className={styles.testimonial_card}>
            <img src={BrooklynSimmonsImg} alt="Brooklyn Simmons"/>
            <h4>Brooklyn Simmons</h4>
            <div className={styles.rating}>
              <FaStar color="#FFD700"/>
              <span>5.0</span>
            </div>
            <p>Good service, the tour guide's very helpful and humorous</p>
          </div>
          <div className={styles.testimonial_card}>
            <img src={RobertFoxImg} alt="Robert Fox"/>
            <h4>Robert Fox</h4>
            <div className={styles.rating}>
              <FaStar color="#FFD700"/>
              <span>5.0</span>
            </div>
            <p>I recently went on a tour with [Travel Website Name], and it exceeded all my expectations!</p>
          </div>
          <div className={styles.testimonial_card}>
            <img src={JennyWilsonImg} alt="Jenny Wilson"/>
            <h4>Jenny Wilson</h4>
            <div className={styles.rating}>
              <FaStar color="#FFD700"/>
              <span>5.0</span>
            </div>
            <p>Awesome website and service for your journey!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;