import styleJal from './JalalAbadComponents.module.css'
import style from "../../DestinationPage/InfoCountry/InfoCountry.module.css";
import TravelDestination from "../../../components/SidePanel/TravelDestination/TravelDestination.tsx";
import ContactPanel from "../../../components/SidePanel/ContactPanel/ContactPanel.tsx";
import SidePopularTours from "../../../components/SidePanel/SidePopularTours/SidePopularTours.tsx";
import styles from '../../../globalStyle.module.css'

const JalalAbadComponents = () => {
    const selectedDestinations = ["Altyn Arashan", "Arslanbob", "Batken", "Bishkek"];

    return (
        <div>
            <div className={styleJal.bg__jal}>
                <h2>Jalal-abad</h2>
            </div>

            <div className={styles.container}>
                <div className={style.InfoWrapper}>
                    <div className={styles.description__jal}>
                        <div>
                            <h3>Jalal-abad</h3>
                            <span className={styleJal.span}>Exploring the Area</span>
                            <p>Jalal-Abad town is the capital of the Jalal Abad region. It is the third city in
                                Kyrgyzstan,
                                has
                                more
                                than 100.000 inhabitants and situated at an altitude of 766 meters asl. Jalal-Abad can
                                be
                                a
                                good
                                starting point
                                for many tours to the historical, cultural and adventure places in the area.</p>
                        </div>
                        <div>
                            <span className={styleJal.span}>Where to Stay</span>
                            <p>Today Jalal-Abad is a popular place to stay. More and more people want to visit and see
                                the
                                colorful
                                multi-national town of “young people”. Popular sayings: “Jalal-Abad town is the town of
                                youngsters” New opened doors of Kok-Art hotel will surprise you with the best service,
                                fresh
                                and new
                                design and facilities. Tien-Shan Hotel, Roza Park hotel also could welcome you. Small
                                family-run
                                guesthouses, cozy and hospitable with tasty meals and family surroundings. The popular
                                movement of
                                hostels also emerged Jalal-Abad, possibly to book and stay in hostels</p>
                        </div>

                        <div>
                            <span className={styleJal.span}>What to See and Do</span>
                            <p>The town is very charming with shady streets, running waters in aryk and roaring bazaar.
                                Possible
                                to
                                walk
                                around the Toktogul Park – relaxing green park. The Kurort in Jalal-Abad is a historic
                                building
                                complex.
                                You can feel the Soviet atmosphere of wellness by mineral water and mud bath, massage,
                                and
                                physiotherapy. Today this resort as many of the Soviet heritage kurorts under the public
                                union
                                administration. Near the location here is the list of interesting places. From
                                Jalal-Abad
                                possible to
                                have adventure trips to famous and touristic Arslanbob. As the best decision, we
                                recommend
                                you
                                to
                                visit
                                the villages of Kyzyl-Unkur and Kara-Alma, both located at a massive natural walnut
                                forest
                                area, with
                                the less touristic and crowded area. Sary-Chelek is another jewel of the region with
                                emerald
                                lake
                                and
                                marvelous stunning nature and surroundings. That is the territory of the Biosphere and
                                Nature
                                Reserve.
                                Get a chance to see that. Saimaluu-Tash (Embroidered Stone)/Kazarman is the largest
                                collection
                                of
                                petroglyphs in Central Asia. Ozgon or Uzgen is an old town, dated from the middle ages
                                with
                                saved
                                Uzgen
                                Minaret and Mausoleum of the 12th century.</p>
                        </div>

                        <div>
                            <span className={styleJal.span}>How to Get Around</span>
                            <p>To reach Jalal-Abad from Bishkek possible on a shared taxi from Western Bus station in
                                Bishkek or
                                near
                                Osh Bazaar. It takes 570 km, about 10 hours driving. Possible to catch a shared taxi
                                from
                                Osh town,
                                Ozgon and Bazar-Korgon.</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.SidePanel}>
                            <TravelDestination destinations={selectedDestinations} title="Travel Destinations"/>
                            <ContactPanel/>
                            <SidePopularTours/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JalalAbadComponents