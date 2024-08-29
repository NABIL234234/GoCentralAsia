import styles from "../../globalStyle.module.css";
import AboutUsIntroduction from "./AboutUsIntroduction/AboutUsIntroduction.tsx";

function Index() {
    return (
        <div className={styles.container}>
            <AboutUsIntroduction />
        </div>
    );
}
export default Index
