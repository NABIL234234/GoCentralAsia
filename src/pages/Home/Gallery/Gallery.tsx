import styles from './Gallery.module.css';

//components
import Title from "../../../components/Title/Title.tsx";
import GalleryCard from "../../../components/GalleryCard/GalleryCard.tsx";

//images
import Gallery1 from "../../../assets/Images/Gallery1.png";
import Gallery2 from "../../../assets/Images/Gallery2.png";
import Gallery3 from "../../../assets/Images/Gallery3.png";
import Gallery4 from "../../../assets/Images/Gallery4.png";
import Gallery5 from "../../../assets/Images/Gallery5.png";
import Gallery6 from "../../../assets/Images/Gallery6.png";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <Title
          mainText="GALLERY"
          paragraph="Our clients memorable moments"
        />
        <div className={styles.gallery_grid}>
          <GalleryCard backgroundImage={Gallery1} className={styles.gallery_card} />
          <GalleryCard backgroundImage={Gallery2} className={styles.gallery_card} />
          <GalleryCard backgroundImage={Gallery3} className={styles.gallery_card} />
          <GalleryCard backgroundImage={Gallery4} className={styles.gallery_card} />
          <GalleryCard backgroundImage={Gallery5} className={styles.gallery_card} />
          <GalleryCard backgroundImage={Gallery6} className={styles.gallery_card} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
