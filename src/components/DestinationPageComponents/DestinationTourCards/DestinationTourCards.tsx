
import styles from "./DestinationTourCards.module.css";
import TourCard from "../../homePageComponets/TourCard/TourCard.tsx";

interface Tour {
    price: string;
    days: string;
    people: string;
    countryPoint?: string;
    tourDescription: string;
}

interface DestinationTourCardsProps {
    tourData: Tour[];
}

const DestinationTourCards: React.FC<DestinationTourCardsProps> = ({ tourData }) => {
    return (
        <div>

            <div className={styles.tour_cards_groupTours}>
                {tourData?.map((tour, index) => (
                    <TourCard
                        key={index}
                        className={`${styles.tour_card_info} ${styles[`tour_card_${index + 1}`]}`}
                        price={tour.price}
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
