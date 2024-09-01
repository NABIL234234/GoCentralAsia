import stylesGroup from './GroupToursComponents.module.css'
import DestinationTourCards from "../../../components/DestinationPageComponents/DestinationTourCards/DestinationTourCards.tsx";
import styles from "../../DestinationPage/InfoCountry/InfoCountry.module.css";
import style from '../../../globalStyle.module.css'
import TravelDestination from "../../../components/SidePanel/TravelDestination/TravelDestination.tsx";
import ContactPanel from "../../../components/SidePanel/ContactPanel/ContactPanel.tsx";
import SidePopularTours from "../../../components/SidePanel/SidePopularTours/SidePopularTours.tsx";

const GroupToursComponents = () => {
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
        {
            price: "$2000/per person",
            days: "10D/9N",
            people: "People: 7",
            countryPoint: "Kyrgyzstan",
            tourDescription: "Explore the beauty of Kyrgyzstan with our exclusive tours.",
        },
        {
            price: "$2000/per person",
            days: "10D/9N",
            people: "People: 7",
            countryPoint: "Kyrgyzstan",
            tourDescription: "Explore the beauty of Kyrgyzstan with our exclusive tours.",
        }, {
            price: "$2000/per person",
            days: "10D/9N",
            people: "People: 7",
            countryPoint: "Kyrgyzstan",
            tourDescription: "Explore the beauty of Kyrgyzstan with our exclusive tours.",
        }
    ];

    const limitedTourData = tourData.slice(0, 6);

    const selectedDestinations = ["Altyn Arashan", "Arslanbob", "Batken", "Burana Tower", "Cholpon-Ata", "Chon-Kemin", "Issyk-Kul", "Jalalabad", "Karakol"];

    return (
        <div>
            <div className={stylesGroup.bg__group}>
                <div className={stylesGroup.titile__group}>
                    <h2>Group tours</h2>
                    <span>Embark on Unforgettable Group Adventures!</span>
                </div>
            </div>

            <div className={style.container}>
                <div>
                    <h2>KYRGYZSTAN SMALL GROUP TOURS</h2>
                    <p>Nestled in the heart of Central Asia, Kyrgyzstan beckons with its breathtaking mountain
                        landscapes,
                        nomadic culture, and <br/> warm hospitality. Known as the 'Land of the Celestial Mountains,'
                        Kyrgyzstan is
                        a paradise for outdoor enthusiasts and <br/> cultural adventurers alike.</p>
                </div>

                <div className={styles.InfoWrapper}>
                    <DestinationTourCards tourData={limitedTourData}/>
                    <div className={styles.SidePanel}>
                        <TravelDestination destinations={selectedDestinations} title='Travel Destinations'/>
                        <ContactPanel/>
                        <SidePopularTours/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupToursComponents;
