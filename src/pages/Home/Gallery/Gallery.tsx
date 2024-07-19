import './Gallery.scss'

//components
import Title from "../../../components/Title/Title.tsx";
import GalleryCard from "../../../components/GalleryCard/GalleryCard.tsx";

//images
import Gallery1 from "../../../assets/Images/Gallery1.png"
import Gallery2 from "../../../assets/Images/Gallery2.png"
import Gallery3 from "../../../assets/Images/Gallery3.png"
import Gallery4 from "../../../assets/Images/Gallery4.png"
import Gallery5 from "../../../assets/Images/Gallery5.png"
import Gallery6 from "../../../assets/Images/Gallery6.png"

function TourTypes() {
  return (
    <div className="tour_types">
      <div className="container">
        <Title
          mainText="GALLERY"
          paragraph="Our clients memorable moments"
        />
        <div className="tour_types_grid">
          <div className="tour_type">
            <GalleryCard

              backgroundImage={Gallery1}
            />
            <GalleryCard

              backgroundImage={Gallery2}
            />
            <GalleryCard

              backgroundImage={Gallery3}
            />

          </div>
          <div className="tour_type">
            <GalleryCard

              backgroundImage={Gallery4}
            />
            <GalleryCard

              backgroundImage={Gallery5}
            />
            <GalleryCard

              backgroundImage={Gallery6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourTypes;
