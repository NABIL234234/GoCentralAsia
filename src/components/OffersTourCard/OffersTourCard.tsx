import styles from "../../pages/Home/Offers/Offers.module.css";
import TourImg from "../../assets/Images/Tour.png";

type OffersTourCardProps = {
  title: string;
  description: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
};

const OffersTourCard: React.FC<OffersTourCardProps> = ({ title, description, oldPrice, newPrice, discount }) => {
  return (
    <div className={styles.tour_card}>
      <img src={TourImg} alt={title} />
      <div className={styles.tour_desc}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.offer_badge}>
        <span>{discount}</span>
      </div>
      <div className={styles.price}>
        <span className={styles.price_title}>Price:</span>
        <span className={styles.old_price}>{oldPrice}</span>
        <span className={styles.new_price}>{newPrice}</span>
      </div>
    </div>
  );
};

export default OffersTourCard;
