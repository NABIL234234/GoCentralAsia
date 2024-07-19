import './CentralAsiaTours.scss'

//components
import Title from "../../../components/Title/Title.tsx";

//images
import River from '../../../assets/Images/CA_photo1.png'
import Mountain from "../../../assets/Images/CA_photo2.png"


function CentralAsiaTours() {
  return (
    <div className="central_asia_tours">
      <div className="container">
        <Title mainText="Central Asia Group and Private tours" paragraph="Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences. We are passionate
        about crafting unforgettable journeys that immerse you in the beauty and culture of destinations around the
        globe. With a dedicated team of travel experts, we strive to provide personalized service, attention to
        detail, and insider knowledge to ensure your trip exceeds expectations. Whether you're seeking adventure,
        relaxation, or cultural enrichment, trust us to turn your travel dreams into reality. Join us on a journey
        of discovery and let's create memories that last a lifetime"/>
          <div className="asia_images">
            <img className="River" src={River} alt="River"/>
            <img className="Mountain" src={Mountain} alt="Mountain"/>
          </div>
      </div>
    </div>
);
}

export default CentralAsiaTours;