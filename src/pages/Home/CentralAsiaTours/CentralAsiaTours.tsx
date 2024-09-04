import styles from './CentralAsiaTours.module.css';

//components
import Title from "../../../components/Global/Title/Title.tsx";

//images
import River from '../../../assets/Images/CA_photo1.png';
import Mountain from "../../../assets/Images/CA_photo2.png";
import CentralAsiaToursAdaptive from "./CentralAsiaToursAdaptive/CentralAsiaToursAdaptive.tsx";

function CentralAsiaTours() {
  return (
    <div>
      <div className={styles.central_asia_tours}>
        <div className={styles.container}>
          <Title mainText="Central Asia Group and Private tours" paragraph="Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences. We are passionate
          about crafting unforgettable journeys that immerse you in the beauty and culture of destinations around the
          globe. With a dedicated team of travel experts, we strive to provide personalized service, attention to
          detail, and insider knowledge to ensure your trip exceeds expectations. Whether you're seeking adventure,
          relaxation, or cultural enrichment, trust us to turn your travel dreams into reality. Join us on a journey
          of discovery and let's create memories that last a lifetime"/>
          <div className={styles.asia_images}>
            <img className={styles.River} src={River} alt="River"/>
            <img className={styles.Mountain} src={Mountain} alt="Mountain"/>
          </div>
        </div>
      </div>
      <CentralAsiaToursAdaptive className={styles.central_asia_tours_adaptive} />
    </div>
  );
}

export default CentralAsiaTours;
