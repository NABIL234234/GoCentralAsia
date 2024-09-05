import styles from './GroupTours.module.css';
import Title from "../../../components/Global/Title/Title.tsx";
import TourCard from "../../../components/homePageComponets/TourCard/TourCard.tsx";
import SeeMore from "../../../components/Global/SeeMore/SeeMore.tsx";

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
  },
  // добавьте другие данные по необходимости
];

function GroupTours() {
  return (
    <div className={styles.group_tours}>
      <div className={styles.container}>
        <Title
          mainText="Group TOURS"
          paragraph="Discover our top-rated and highly sought-after tours that have captured the hearts of travelers worldwide."
        />
        <div>
          <div className={styles.country_category_list}>
            <h5>Multi-country</h5>
            <h5>Kyrgyzstan</h5>
            <h5>Kazakhstan</h5>
            <h5>Uzbekistan</h5>
            <h5>Tajikistan</h5>
            <h5>Turkmenistan</h5>
          </div>
          <div className={styles.tour_cards}>
            {tourData.map((tour, index) => (
              <TourCard
                key={index}
                className={styles[`tour_card_${index + 1}`]}
                price={tour.price}
                days={tour.days}
                people={tour.people}
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

export default GroupTours;
