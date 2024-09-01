
import styles from "./DescriptionCountry.module.css";
import PictureKg from "../../../assets/Images/InfoKg.jpg";

const DescriptionCountry = () => {
  return (
    <div>
      <div className={styles.TitleInfoWrapper}>
        <h2 className={styles.kgtext}>Kyrgyzstan</h2>
        <div className={styles.small}>
        <h2 >Kyrgyzstan Small Group <br/> tours</h2>
        </div>
        <button>Transfers</button>
      </div>
      <div className={styles.countryDescription}>
        <img src={PictureKg} alt="Kyrgyzstan"/>
        <div className={styles.countryParagraph}>
          <h4>Exploring the Area</h4>
          <p>Jalal-Abad town is the capital of the Jalal Abad region. It is the third city in Kyrgyzstan, has more
            than 100.000 inhabitants and situated at an altitude of 766 meters asl. Jalal-Abad can be a good
            starting
            point for many tours to the historical, cultural and adventure places in the area</p>
        </div>
        <div className={styles.countryParagraph}>
          <h4>Where to Stay</h4>
          <p>Today Jalal-Abad is a popular place to stay. More and more people want to visit and see the colorful
            multi-national town of “young people”. Popular sayings: “Jalal-Abad town is the town of youngsters”.
            New opened doors of Kok-Art hotel will surprise you with the best service, fresh and new design and
            facilities. Tien-Shan Hotel, Roza Park hotel also could welcome you. Small family-run guesthouses,
            cozy and hospitable with tasty meals and family surroundings. The popular movement of hostels also
            emerged
            Jalal-Abad, possibly to book and stay in hostels too</p>
        </div>
        <div className={styles.countryParagraph}>
          <h4>What to See and Do</h4>
          <p>The town is very charming with shady streets, running waters in aryk and roaring bazaar. Possible to
            walk around the Toktogul Park – relaxing green park. The Kurort in Jalal-Abad is a historic building
            complex. You can feel the Soviet atmosphere of wellness by mineral water and mud bath, massage, and
            physiotherapy.
            Today this resort as many of the Soviet heritage kurorts under the public union administration.
            Near the location here is the list of interesting places.
            From Jalal-Abad possible to have adventure trips to famous and touristic Arslanbob. As the best
            decision,
            we recommend you to visit the villages of Kyzyl-Unkur and Kara-Alma, both located at a massive natural
            walnut forest area, with the less touristic and crowded area.
            Sary-Chelek is another jewel of the region with emerald lake and marvelous stunning nature and
            surroundings. That is the territory of the Biosphere and Nature Reserve. Get a chance to see that.
            Saimaluu-Tash (Embroidered Stone)/Kazarman is the largest collection of petroglyphs in Central Asia.
            Ozgon or Uzgen is an old town, dated from the middle ages with saved Uzgen Minaret and Mausoleum of
            the
            12th century.</p>
        </div>
        <div className={styles.countryParagraph}>
          <h4>How to Get Around</h4>
          <p>
            To reach Jalal-Abad from Bishkek possible on a shared taxi from Western Bus station in Bishkek or near
            Osh Bazaar. It takes 570 km, about 10 hours driving.
            Possible to catch a shared taxi from Osh town, Ozgon and Bazar-Korgon</p>
        </div>

        <div className={styles.countryAdaptive}>
          <p>Nestled in the heart of Central Asia, Kyrgyzstan beckons with its breathtaking mountain landscapes, nomadic
            culture, and warm hospitality. Known as the 'Land of the Celestial Mountains,'
            Kyrgyzstan is a paradise for outdoor enthusiasts and cultural adventurers alike.</p>
          <p>With over 90% of its territory covered by mountains, Kyrgyzstan offers endless opportunities for trekking,
            horseback riding, and mountaineering. From the towering peaks of the Tien Shan range to the tranquil shores
            of alpine lakes like
            Issyk-Kul, the country's natural beauty is simply awe-inspiring.</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCountry;