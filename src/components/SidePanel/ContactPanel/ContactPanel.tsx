
import styles from "./ContactPanel.module.css";

const ContactPanel = () => {
  return (
    <div className={styles.ContactSideBar}>
      <h3>Contact With Us</h3>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Your name"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Comments"/>
      </div>
      <button>Send</button>
    </div>
  );
};

export default ContactPanel;