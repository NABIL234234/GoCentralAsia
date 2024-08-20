import styles from './PopularTour.module.css';
import Title from "../../../components/Title/Title.tsx";
import SeeMore from "../../../components/buttons/SeeMore/SeeMore.tsx";
import PopularTourCard from "../../../components/PopularTourCard/PopularTourCard.tsx";

function PopularTour() {
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
    <div className={styles.popular_tours}>
      <div className={styles.container}>
        <Title
          mainText="MOST POPULAR TOURS"
          paragraph="Discover our top-rated and highly sought-after tours that have captured the hearts of travelers worldwide."
        />
        <div>
          <div className={styles.tour_cards}>
            {tourData.map((tour, index) => (
              <PopularTourCard
                key={index}
                days={tour.days}
                countryPoint={tour.countryPoint}
                tourDescription={tour.tourDescription}
              />
            ))}
          </div>
          <div className={styles.button_container}>
            <SeeMore title="See More" className={styles.button} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularTour;
