import Title from "../../../../components/Title/Title.tsx";
import styles from './CentralAsiaToursAdaptive.module.css';

//images
import River from '../../../../assets/Images/River.png'
import Mountain from '../../../../assets/Images/Mountain.png'

type CentralAsiaToursAdaptiveProps = {
  className?: string;
}

const CentralAsiaToursAdaptive = ({className}: CentralAsiaToursAdaptiveProps) => {
  return (
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.central_asia_tours_adaptive}>

            <Title mainText="ABOUT US"
                   paragraph="Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences. We are passionate about crafting unforgettable journeys that immerse you in the beauty and culture of destinations around the globe. With a dedicated team of travel experts, we strive to provide personalized service, attention to detail, and insider knowledge to ensure your trip exceeds expectations. "/>

          <div className={styles.central_asia_container}>
            <img src={River} alt=""/>
            <p>Whether you're seeking adventure, relaxation, or cultural enrichment, trust us to turn your travel dreams
              into reality. Join us on a journey of discovery and let's create memories that last a lifetime.</p>
            <img src={Mountain} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralAsiaToursAdaptive;
