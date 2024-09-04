import styles from "./TravelDestination.module.css";

interface TravelDestinationProps {
    destinations: string[];
    title?: string;
    className?: string;
}

const TravelDestination: React.FC<TravelDestinationProps> = ({ destinations, title = "Travel Destinations" }) => {
    return (
        <div className={styles.TravelDestinations}>
            <h3>{title}</h3>
            <ul>
                {destinations.map((destination, index) => (
                    <li key={index}>{destination}</li>
                ))}
            </ul>
        </div>
    );
};

export default TravelDestination;
