import styles from './ContactUsCom.module.css'
import FacebookLogo from '../../../assets/Images/FacebookLogo.svg'
import WhatsappLogo from '../../../assets/Images/WhatsappLogo.svg'
import InstagramLogo from '../../../assets/Images/InstagramLogo.svg'
import GoogleLogo from '../../../assets/Images/GoogleLogo.svg'
import YoutubeLogo from '../../../assets/Images/YoutubeLogo.svg'
import ChatsCircle from '../../../assets/Images/ChatsCircle.svg'

const contactUsCom = () =>{
    return  <div className={styles.Container}>
        <div className={styles.Container_Bl}>
            <h2 className={styles.Bl_h2}>contact us</h2>
            <div className={styles.Bl_Con}>
                <div className={styles.Con_Block}>
                    <h3 className={styles.h3}>We’d Love to Hear from You</h3>
                    <p className={styles.p}>At GoCentralAsia.com, we are committed to providing exceptional
                        service and support to all our travelers. Whether you have questions, need assistance, or simply
                        want to share your travel experiences, our team is here to help.</p>
                </div>
                <div className={styles.Con_Block}>
                    <div className={styles.Block_Inf}>
                        <h3 className={styles.h3}>Get in Touch</h3>
                        <div className={styles.Inf_hr1}></div>
                    </div>
                    <div className={styles.Block_Dot}>
                        <span>•</span>
                        <p className={styles.p}>
                            Email: For general inquiries, feedback, or support,
                            please email us at

                            <span className={styles.p_span}> info@gocentralasia.com.</span>
                        </p>

                    </div>

                    <div className={styles.Block_Dot}><span>•</span><p className={styles.p}>

                        Phone: Speak directly with our customer service team by calling us at
                        <span className={styles.p_span}>+1 (123) 456-7890.</span> Our phone lines are open Monday to
                        Friday, 9 AM
                        to 6 PM (GMT).
                    </p></div>
                    <div className={styles.Block_Dot}><span>•</span> <p className={styles.p}>
                        Live Chat: For immediate assistance, use our live chat feature available on our website. Our
                        chat support is available 24/7 to help you with any queries.
                    </p></div>


                </div>
                <button className={styles.Con_button}><img className={styles.button_img} src={ChatsCircle}
                                                           alt={'icon'}/>Live
                    Chat
                </button>
                <div className={styles.Con_Block}>
                    <div className={styles.Block_Inf}>
                        <h3 className={styles.h3}>Follow Us on Social Media</h3>
                        <div className={styles.Inf_hr2}></div>
                    </div>
                    <p className={styles.p}>Stay connected with us and get the latest updates, travel tips, and
                        exclusive offers by following us on social media:</p>
                    <div className={styles.Block_Icons}>
                        <img src={FacebookLogo} alt={'icon link'}/>
                        <img src={WhatsappLogo} alt={'icon link'}/>
                        <img src={InstagramLogo} alt={'icon link'}/>
                        <img src={GoogleLogo} alt={'icon link'}/>
                        <img src={YoutubeLogo} alt={'icon link'}/>
                    </div>
                </div>
                <div className={styles.Con_Block}>
                    <h3 className={styles.h3}>Feedback and Suggestions</h3>
                    <p className={styles.p}>Feedback and Suggestions</p>
                    <p className={styles.p}>
                        Your feedback is invaluable to us. If you have any suggestions or comments on how we can improve
                        our
                        services, please send them to <span
                        className={styles.p_span}>feedback@gocentralasia.com.</span> We
                        appreciate your input and strive to continuously enhance your travel experience.
                    </p>

                    <div className={styles.Block_p}>
                        <p className={styles.p}>Thank you for choosing
                        GoCentralAsia.com!</p>
                        <p className={styles.p}>We look forward to helping you explore the wonders of Central Asia.</p>
                    </div>


                </div>
            </div>
        </div>
        <div className={styles.Container_Destinations}>
            <h3 className={styles.Destinations_h3}>Destinations</h3>
            <p className={styles.Destinations_p}>Kyrgyzstan</p>
            <p className={styles.Destinations_p}>Kazakhstan</p>
            <p className={styles.Destinations_p}>Uzbekistan</p>
            <p className={styles.Destinations_p}>Tajikistan</p>
            <p className={styles.Destinations_p}>Turkmenistan</p>
        </div>
    </div>
};

export default contactUsCom;