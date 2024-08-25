import styles from './Offers.module.css';
import Title from "../../../components/Global/Title/Title.tsx";
import SeeMore from "../../../components/Global/SeeMore/SeeMore.tsx";
import OffersTourCard from "../../../components/homePageComponets/OffersTourCard/OffersTourCard.tsx";

const tourData = [
  {
    id: 1,
    title: "Alai Heights, Kyrgyzstan",
    description: "Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.",
    oldPrice: "$1300",
    newPrice: "$1105",
    discount: "20% Off",
  },
  {
    id: 2,
    title: "Alai Heights, Kyrgyzstan",
    description: "Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.",
    oldPrice: "$1300",
    newPrice: "$1105",
    discount: "20% Off",
  },
  {
    id: 3,
    title: "Alai Heights, Kyrgyzstan",
    description: "Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.",
    oldPrice: "$1300",
    newPrice: "$1105",
    discount: "20% Off",
  },
  // Добавьте другие данные по необходимости
];

function Offers() {
  return (
    <div className={styles.offers_section}>
      <div className={styles.container}>
        <Title
          mainText="Special offers for you"
          paragraph="Exclusive travel offers and discounts await"
        />
        <div className={styles.tour_cards}>
          {tourData.map((tour) => (
            <OffersTourCard
              key={tour.id}
              title={tour.title}
              description={tour.description}
              oldPrice={tour.oldPrice}
              newPrice={tour.newPrice}
              discount={tour.discount}
            />
          ))}
        </div>
        <div className={styles.button_container}>
          <SeeMore title="See More" className={styles.button} />
        </div>
      </div>
    </div>
  );
}

export default Offers;
