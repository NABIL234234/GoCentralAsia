import karakol from '../../../assets/Images/karakol.png';
import styles from "../../DestinationPage/InfoCountry/InfoCountry.module.css";
import karakolstyles from './KarakolComponents.module.css'
import TravelDestination from "../../../components/SidePanel/TravelDestination/TravelDestination.tsx";
import ContactPanel from "../../../components/SidePanel/ContactPanel/ContactPanel.tsx";
import SidePopularTours from "../../../components/SidePanel/SidePopularTours/SidePopularTours.tsx";
import './KarakolComponents.module.css';

const KarakolComponents = () => {
    const selectedDestinations = ["Altyn Arashan", "Arslanbob", "Batken", "Bishkek"];

    return (
        <div>
            <div className={karakolstyles.karakol}>
                <div className={styles.InfoWrapper}>
                    <div>
                        <h2>KARAKOL, KYRGYZSTAN</h2>
                        <div className={karakolstyles.images}>
                            <img src={karakol} alt="karakol"/>
                        </div>
                        <div className={karakolstyles.description}>
                            <p>Nestled in the heart of Central Asia, Kyrgyzstan beckons with its breathtaking mountain
                                landscapes, nomadic culture, and warm hospitality. Known as the 'Land of the Celestial
                                Mountains,'
                                Kyrgyzstan is a paradise for outdoor enthusiasts and cultural adventurers alike.</p>

                            <p>With over 90% of its territory covered by mountains, Kyrgyzstan offers endless
                                opportunities for trekking, horseback riding, and mountaineering. From the towering
                                peaks of the Tien Shan range to the tranquil shores of alpine lakes like
                                Issyk-Kul, the country's natural beauty is simply awe-inspiring.</p>

                            <p>Beyond its landscapes, Kyrgyzstan boasts a rich nomadic heritage that is proudly
                                preserved by its people. Experience the timeless tradition of hospitality in yurts, the
                                traditional dwellings of nomadic tribes, and immerse yourself in the vibrant culture
                                through music, dance, and handicrafts. Discover ancient Silk Road cities like Osh and
                                Karakol, where history comes alive amidst centuries-old bazaars, mosques, and
                                caravanserais. Taste the flavors of Kyrgyz cuisine, influenced by its nomadic roots
                                and the diverse cultures that have traversed this land.</p>
                        </div>
                    </div>

                    <div className={styles.SidePanel}>
                        <TravelDestination destinations={selectedDestinations} title="Travel Destinations"/>
                        <ContactPanel />
                        <SidePopularTours />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KarakolComponents;
