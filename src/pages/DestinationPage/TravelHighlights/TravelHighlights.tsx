import styles from './TravelHighlights.module.css'
import Kyrgyzstan from "../../../assets/Images/Kyrgyzstan.png"


const TravelHighlights = () => {
  return (
    <div className={styles.travelHighlights}>
      <div>
        <img src={Kyrgyzstan} className={styles.travelHighlightsImage} alt="Kyrgyzstan"/>
      </div>
      <div className={styles.titleTravelHighlights}>
        <h2>Travel Highlights of Kyrgyzstan</h2>
        <p>Nestled in the heart of Central Asia, Kyrgyzstan beckons with its breathtaking mountain landscapes, nomadic
          culture, and warm hospitality. Known as the 'Land of the Celestial Mountains,' Kyrgyzstan is a paradise for
          outdoor enthusiasts and cultural adventurers alike.</p>
      </div>
      <div className={styles.photosCountry}>
        <h2>Kyrgyzstan in photos</h2>
        <div className={styles.photosWrapper}>
          <div className={styles.photoCountry}/>
          <div className={styles.photoCountry}/>
        </div>
      </div>
    </div>
  );
};

export default TravelHighlights;