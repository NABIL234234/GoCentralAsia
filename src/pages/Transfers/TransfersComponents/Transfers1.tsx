import cars from '../../../assets/Images/cars.png';
import stylesTrans from './Transfers1.module.css';
import styles from "../../DestinationPage/InfoCountry/InfoCountry.module.css";
import TravelDestination from "../../../components/SidePanel/TravelDestination/TravelDestination.tsx";


const Transfers1 = () => {
    const selectedDestinations = ["Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Tajikistan", "Turkmenistan"];

    return (
        <div className={styles.InfoWrapper}>
            <div>
                <div className={stylesTrans.section}>
                    <h2>Transfers</h2>
                    <p>Embark on an unforgettable journey of discovery in Kyrgyzstan, where you'll have the opportunity
                        to meet fellow travelers from across the globe and join scheduled tours. Alongside tailored
                        individual itineraries, we also offer the most sought-after group
                        tour packages in Kyrgyzstan, with guaranteed departure dates for 2024 and 2025.</p>
                </div>
                <div className={stylesTrans.section}>
                    <h2>Characteristics of the vehicles</h2>
                    <p>Sedan - a car with a capacity of 1-3 passengers and a trunk for 2 small suitcases. Van - the
                        capacity may vary depending on the number of passengers, suitcases, and their size. We recommend
                        that you count on a capacity of up to 5 passengers with luggage. Usually we use Toyota Alphard
                        and Estima vans. SUV - a vehicle with high cross-country ability and increased comfort with a
                        capacity of 1-3 passengers and a spacious trunk for 4 suitcases.</p>
                </div>

                <section className={stylesTrans.cars__flex}>
                    <div className={stylesTrans.cars__two}>
                        <div className={stylesTrans.cars}>
                            <span>Sedan</span>
                            <img src={cars} alt="Sedan"/>
                        </div>
                        <div className={stylesTrans.cars}>
                            <span>Van</span>
                            <img src={cars} alt="Van"/>
                        </div>
                        <div className={stylesTrans.cars}>
                            <span>SUV</span>
                            <img src={cars} alt="SUV"/>
                        </div>
                    </div>
                    <div className={`${stylesTrans.cars} ${stylesTrans.lastCar}`}>
                        <span>Mini Van (18 seats)</span>
                        <img src={cars} alt="Mini Van"/>
                    </div>
                </section>

                <div className={stylesTrans.title}>
                    <h2>Our advantages:</h2>
                    <ul>
                        <li>Free Waiting Time: Take your time and relax as all pickups include free waiting time.</li>
                        <li>All inclusive: no additional taxes and fees.</li>
                        <li>Professional drivers: Our drivers have a license and insurance and will provide you with a
                            safe
                            and
                            comfortable trip. <br/> Note: You will be met at the exit of the airport or hotel.
                        </li>
                    </ul>
                </div>

                <div className={stylesTrans.tableContainer}>
                    <table>
                        <thead>
                        <tr>
                            <th>Direction</th>
                            <th>Sedan</th>
                            <th>Van</th>
                            <th>SUV</th>
                            <th>Mini Van</th>
                        </tr>

                        </thead>
                        <tbody>
                        <tr>
                            <td>Bishkek - Almaty</td>
                            <td>$110</td>
                            <td>$135</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Manas airport - Bishkek</td>
                            <td>$45</td>
                            <td>$75</td>
                            <td>$45</td>
                            <td>$45</td>
                        </tr>
                        <tr>
                            <td>Bishkek - Almaty</td>
                            <td>$110</td>
                            <td>$135</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Manas airport - Bishkek</td>
                            <td>$45</td>
                            <td>$75</td>
                            <td>$45</td>
                            <td>$45</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={styles.SidePanel}>
                <TravelDestination destinations={selectedDestinations} title="Destinations"/>
            </div>
        </div>
    );
}

export default Transfers1;
