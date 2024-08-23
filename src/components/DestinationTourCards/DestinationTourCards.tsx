import Title from "../Title/Title.tsx";
import styles from "./DestinationTourCards.module.css";
import TourCard from "../TourCard/TourCard.tsx";

const DestinationTourCards = () => {
  const tourData = [
    {
      price: "$1900/per person",
      days: "7D/6N",
      people: "People: 5",
      countryPoint: "Kyrgyzstan",
      tourDescription: "Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.",
    },
    {
      price: "$1900/per person",
      days: "7D/6N",
      people: "People: 5",
      countryPoint: "Kyrgyzstan",
      tourDescription: "Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.",
    },
    {
      price: "$1900/per person",
      days: "7D/6N",
      people: "People: 5",
      countryPoint: "Kyrgyzstan",
      tourDescription: "Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.",
    }
  ];
  return (
    <div>
      <Title mainText="Kyrgyzstan Group Tours" className={styles.titleText}/>
      <div className={styles.tour_cards_groupTours}>
        {tourData.map((tour, index) => (
          <TourCard
            key={index}
            className={styles.tour_card_info}
            price={tour.price}
            days={tour.days}
            people={tour.people}
            tourDescription={tour.tourDescription}
            SecondClassName={styles.customInfoBlock}
          />
        ))}
      </div>
      <Title mainText="Kyrgyzstan Private Tours" className={styles.titleText}/>
      <div className={styles.tour_cards_groupTours}>
        {tourData.map((tour, index) => (
          <TourCard
            key={index}
            className={styles.tour_card_info}
            days={tour.days}
            people={tour.people}
            tourDescription={tour.tourDescription}
            SecondClassName={styles.customInfoBlock}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationTourCards;