import styles from "../../globalStyle.module.css";
import ContentBlog from "./ContentBlog/ContentBlog.tsx";

function Index() {
    return (
        <div className={styles.container}>
            <ContentBlog/>
        </div>
    );
}
export default Index
