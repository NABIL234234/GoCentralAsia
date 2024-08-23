import styles from "./SidePopularTours.module.css";
import PopularTourCard from "../PopularTourCard/PopularTourCard.tsx";

const SidePopularTours = () => {

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
    <div className={styles.tour_cards_SidePopularTours}>
      {tourData.map((tour, index) => (
        <PopularTourCard
          key={index}
          days={tour.days}
          countryPoint={tour.countryPoint}
          tourDescription={tour.tourDescription}
          className={styles.popularCardStyle}
          SecondClassName={styles.customTourInfoBlock}
        />
      ))}
    </div>
  );
};

export default SidePopularTours;