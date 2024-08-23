import styles from './InfoCountry.module.css';
import '../../../globalStyle.module.css';

import DestinationTourCards from "../../../components/DestinationTourCards/DestinationTourCards.tsx";
import DescriptionCountry from "../DescriptionCountry/DescriptionCountry.tsx";
import TravelDestination from "../../../components/TravelDestination/TravelDestination.tsx";
import ContactPanel from "../../../components/ContactPanel/ContactPanel.tsx";
import SidePopularTours from "../../../components/SidePopularTours/SidePopularTours.tsx";
import TravelHighlights from "../TravelHighlights/TravelHighlights.tsx";

const InfoCountry = () => {

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.InfoWrapper}>
          <div>
            <DescriptionCountry/>
            <DestinationTourCards/>
            <TravelHighlights/>
          </div>
          <div className={styles.SidePanel}>
            <TravelDestination/>
            <ContactPanel/>
            <SidePopularTours/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCountry;
