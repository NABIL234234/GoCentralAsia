import styles from "./TravelDestination.module.css";

const TravelDestination = () => {
  return (
    <div className={styles.TravelDestinations}>
      <h3>Travel Destinations</h3>
      <ul>
        <li>Altyn Arashan</li>
        <li>Arslanbob</li>
        <li>Batken</li>
        <li>Bishkek</li>
        <li>Burana Tower</li>
        <li>Cholpon-Ata</li>
        <li>Chon-Kemin</li>
        <li>Issyk-Kul</li>
        <li>Jalalabad</li>
        <li>Karakol</li>
      </ul>
    </div>
  );
};

export default TravelDestination;