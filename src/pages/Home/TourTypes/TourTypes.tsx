import styles from './TourTypes.module.css';

//components
import Title from "../../../components/Global/Title/Title.tsx";
import TourTypesCard from "../../../components/homePageComponets/TourTypesCard/TourTypesCard.tsx";

//images
import Bike from '../../../assets/Images/Bike.png';
import Winter from '../../../assets/Images/Winter.png';
import HorseBack from "../../../assets/Images/HorseBack.png";
import Group from "../../../assets/Images/GroupTours.png";
import OffRoads from "../../../assets/Images/offRoads.png";
import Culture from "../../../assets/Images/Culture.png";
import Photo from "../../../assets/Images/Photo.png";
import OneDay from "../../../assets/Images/OneDay.png";



function TourTypes() {
  return (
    <div className={styles.tour_types}>
      <div className={styles.container}>
             <Title
                 mainText="TOUR TYPES"
                 paragraph="Explore our diverse range of tour types tailored to suit every traveler's preferences and interests. Choose from adventure tours, cultural expeditions, eco-friendly journeys, family-friendly vacations, luxury getaways, and more."
             />
             <div className={styles.tour_types_grid}>
                 <TourTypesCard title="Winter Tours" backgroundImage={Winter}/>
                 <TourTypesCard title="Bike Tours" backgroundImage={Bike}/>
                 <TourTypesCard title="Horseback Tours" backgroundImage={HorseBack}/>
                 <TourTypesCard title="Group Tours" backgroundImage={Group}/>
                 <TourTypesCard title="Off Roads Tours" backgroundImage={OffRoads}/>
                 <TourTypesCard title="Culture Tours" backgroundImage={Culture}/>
                 <TourTypesCard title="Photo Tours" backgroundImage={Photo}/>
                 <TourTypesCard title="One Day Tours" backgroundImage={OneDay}/>
             </div>
      </div>
    </div>
  );
}

export default TourTypes;