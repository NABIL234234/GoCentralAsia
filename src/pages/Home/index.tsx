import Hero from "../../pages/Home/Hero/Hero.tsx"
import CentralAsiaTours from "./CentralAsiaTours/CentralAsiaTours.tsx";
import UnveilingCentralAsia from "./UnveilingCentralAsia/UnveilingCentralAsia.tsx";
import GroupTours from "./GroupTours/GroupTours.tsx";
import TourTypes from "./TourTypes/TourTypes.tsx";
import PopularTour from "./PopularTours/PopularTour.tsx";
import Offers from "./Offers/Offers.tsx";
import Testimonial from "./Testimonial/Testimonial.tsx";
import Gallery from "./Gallery/Gallery.tsx";
import Reason from "./Reason/Reason.tsx";

function Index() {
  return (
    <div>
      <Hero />
      <CentralAsiaTours />
      <UnveilingCentralAsia />
      <GroupTours />
      <TourTypes />
      <PopularTour />
      <Offers />
      <Testimonial />
      <Gallery />
      <Reason />
    </div>
  );
}

export default Index;