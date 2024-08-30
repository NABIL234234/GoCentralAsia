import styles from "../../globalStyle.module.css";
import TourismBlog from "./TourismBlog/TourismBlog.tsx";

function Index() {
    return (
        <div className={styles.container}>
            <TourismBlog/>
        </div>
    );
}
export default Index
