import styles from "../../globalStyle.module.css";
import ContentBlog from "./ContentBlog/ContentBlog.tsx";
// import TourismBlog from "./TourismBlog/TourismBlog.tsx";

function Index() {
    return (
        <div className={styles.container}>
            {/*<TourismBlog/>*/}
            <ContentBlog/>
        </div>
    );
}
export default Index
