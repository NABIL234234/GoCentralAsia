import styles from './UnveilingCentralAsia.module.css';

//components
import Title from "../../../components/Global/Title/Title.tsx";

//images
import CentralAsia from "../../../assets/Images/CentralAsia.png";
import CentralAsiaAdaptive from "../../../assets/Images/CentralAsiaAdaptive.png";
import Union1 from "../../../assets/Images/un1.png";
import Union2 from "../../../assets/Images/un2.png";
import Union3 from "../../../assets/Images/un3.png";
import Union4 from "../../../assets/Images/un4.png";
import Union5 from "../../../assets/Images/un5.png";
import Line_5 from "../../../assets/Images/Line5.png";

function UnveilingCentralAsia() {
  return (
    <div className={styles.unveilingCentralAsia}>
      <div className={styles.container}>
        <Title
          mainText="Unveiling central Asia"
          paragraph="Discover the hidden treasures and rich cultural tapestry of Central Asia with [Travel Website Name]. Let us unveil the beauty and mystique of Central Asia, creating memories that will last a lifetime."
        />
        <div className={styles.centralAsiaMap}>
          <img className={styles.centralAsia} src={CentralAsia} alt="Central Asia"/>
          <img className={styles.centralAsiaAdaptive} src={CentralAsiaAdaptive} alt="Central Asia"/>

          <img className={styles.union1} src={Union1} alt="Union1"/>
          <img className={styles.union2} src={Union2} alt="Union2"/>
          <img className={styles.union3} src={Union3} alt="Union3"/>
          <img className={styles.union4} src={Union4} alt="Union4"/>
          <img className={styles.line5} src={Line_5} alt="Line5"/>
          <img className={styles.union5} src={Union5} alt="Union5"/>

        </div>
      </div>
    </div>
  );
}

export default UnveilingCentralAsia;
