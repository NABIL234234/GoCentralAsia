import KarakolComponents from "./KarakolComponents/KarakolComponents.tsx";
import styles from '../../globalStyle.module.css'



const Karakol = () => {
    return (
         <div className={styles.container}>
             <KarakolComponents/>
         </div>
    )
}

export default Karakol