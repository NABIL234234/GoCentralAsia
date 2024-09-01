import styles from './InfoCountry.module.css';
import '../../../globalStyle.module.css';

import DestinationTourCards from "../../../components/DestinationPageComponents/DestinationTourCards/DestinationTourCards.tsx";
import DescriptionCountry from "../DescriptionCountry/DescriptionCountry.tsx";
import TravelDestination from "../../../components/SidePanel/TravelDestination/TravelDestination.tsx";
import ContactPanel from "../../../components/SidePanel/ContactPanel/ContactPanel.tsx";
import SidePopularTours from "../../../components/SidePanel/SidePopularTours/SidePopularTours.tsx";
import TravelHighlights from "../TravelHighlights/TravelHighlights.tsx";
import FQA from "../../../components/DestinationPageComponents/FAQ/FaqComponent.tsx";
import Testimonial from "../Testimonial/Testimonial.tsx";
import  Reason from "../Reason/Reason.tsx"
import Article from "../Articles/Article.tsx";


const InfoCountry = () => {
  const selectedDestinations = ["Altyn Arashan", "Arslanbob", "Batken", "Burana Tower", "Cholpon-Ata", "Chon-Kemin", "Issyk-Kul", "Jalalabad", "Karakol"];

  return (
    <div>
      <div>
        <div className={styles.InfoWrapper}>
          <div>
            <DescriptionCountry/>
            <DestinationTourCards/>
            <TravelHighlights/>
            <FQA />
            <Testimonial />
            <Reason />
            <Article />
          </div>
          <div className={styles.SidePanel}>
            <TravelDestination destinations={selectedDestinations} title='Travel Destinations'/>
            <ContactPanel/>
            <SidePopularTours/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCountry;
