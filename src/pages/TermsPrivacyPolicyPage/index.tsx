import styles from "../../globalStyle.module.css";
import PolicySample from "./PolicySample/PolicySample.tsx";

function Index() {
    return (
        <div className={styles.container}>
          <PolicySample/>
        </div>
    );
}
export default Index