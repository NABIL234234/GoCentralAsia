import styles from './Reason.module.css';

//components
import Title from "../../../components/Global/Title/Title.tsx";
import SeeMore from "../../../components/Global/SeeMore/SeeMore.tsx";

//images
import ReasonImage from "../../../assets/Images/central_asia.png";


function Reason() {
  return (
    <div className={styles.reason}>
      <div className={styles.container}>
       <div>
         <Title
             mainText="Why choose Gocentralasia ?"
             paragraph="Find answers to commonly asked questions to help you plan your travels smoothly. If you have any additional queries or need further assistance, feel free to reach out to our friendly customer support team."
         />
         <div className={styles.central_asia}>
           <img src={ReasonImage} className={styles.central_asia_img} alt="Central Asia"/>
         </div>
         <div className={styles.button_container}>
           <SeeMore title="About Us"/>
         </div>
       </div>
      </div>
    </div>
  );
}

export default Reason;
