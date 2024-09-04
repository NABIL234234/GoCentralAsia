import styles from './UnveilingCentralAsia.module.css';

//components
import Title from "../../../components/Global/Title/Title.tsx";

//images
import Unvailing from '../../../assets/Images/Unveiling.png'
import UnvailingAdaptive from '../../../assets/Images/CentralAsiaAdaptive.png'

function UnveilingCentralAsia() {
  return (
    <div className={styles.unveilingCentralAsia}>
      <div className={styles.container}>
        <Title
          mainText="Unveiling central Asia"
          paragraph="Discover the hidden treasures and rich cultural tapestry of Central Asia with [Travel Website Name]. Let us unveil the beauty and mystique of Central Asia, creating memories that will last a lifetime."
        />
        <div className={styles.centralAsiaMap}>
            <img src={Unvailing} alt="Unvailing"/>
            <img src={UnvailingAdaptive} alt="UnvailingAdaptive"/>
        </div>
      </div>
    </div>
  );
}

export default UnveilingCentralAsia;
