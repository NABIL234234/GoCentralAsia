import styles from "./PolicySample.module.css"

function PolicySample() {
    return (
        <div className={styles.PolicyContainer}>
            <h2 className={styles.PolicyContainer_h2}>Terms Privacy Policy</h2>
            <div className={styles.PolicyContainer_Con}>
                <div>
                    <p className={styles.Min_p}>Advantour is committed to ensuring that your private information remains private. We have created
                        this on-line privacy policy so that you can understand our continuing commitment to ensuring
                        that your information remains secure and private.
                    </p>

                    <p className={styles.Min_p}>These guidelines have been developed with the recognition that Internet technologies and
                        legislation are rapidly evolving, and that underlying business models are still not established.
                        Accordingly, guidelines are subject to change. Any such changes will be posted on this page.
                    </p>
                </div>
                <div className={styles.Con_Min}>
                    <h3 className={styles.Min_h3}>What information does Advantour collect from me?</h3>
                    <p className={styles.Min_p}>We collect information in several ways. When making information requests, we ask you for your
                        name, e-mail address, phone number, address and other relevant information needed to make
                        vacation and travel plans.</p>
                </div>
                <div className={styles.Con_Min}>
                    <h3 className={styles.Min_h3}>How does Advantour use my information?</h3>
                    <p className={styles.Min_p}>In the case of requesting personal information, we will identify the purpose of use thereof and
                        obtain such information only to the extent necessary for conducting business and through a
                        lawful and reasonable manner and will use and/or provide such information only within the limits
                        of the stated purposes.</p>
                </div>
                <div className={styles.Con_Min}>
                    <h3 className={styles.Min_h3}>With whom does Advantour share my information?</h3>
                    <p className={styles.Min_p}>At Advantour, when you provide your personal information including name, address, phone number or
                        e-mail address, this information is kept secured and is not divulged to any outside company for
                        use in marketing or solicitation. Advantour will not sell or rent your personally identifiable
                        information at any time to any one.</p>
                </div>
                <div className={styles.Con_Min}>
                    <h3 className={styles.Min_h3}>What are the security policies of linked third-party sites?</h3>
                    <p className={styles.Min_p}>This web site may contain links to other web sites. Please note that if you click on one of these
                        links, you are moving to a third-party web site. We encourage you to read the privacy statements
                        of these linked sites as their privacy policy may differ from ours. This privacy statement
                        applies solely to information collected by this web site.</p>
                </div>
                <div className={styles.Con_Min}>
                    <h3 className={styles.Min_h3}>What else should I know about internet security?</h3>
                    <p className={styles.Min_p}>Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure. We
                        strive to protect your personal information. Advantour, however, cannot ensure or warrant the
                        security of any information you transmit to us and any information you submit on-line is done
                        voluntarily and at your own risk. Once we receive your transmission, we make our best effort to
                        ensure its security on our systems. No personal information is stored on our website to further
                        secure your personal information.</p>
                </div>
                <div className={styles.Con_Min}>
                    <h3 className={styles.Min_h3}>What is a cookie?</h3>
                    <p className={styles.Min_p}>A cookie is a small data file that is stored locally on your computer that allows specific
                        information to be saved and retrieved when the site requires it. Our web site does not employ
                        cookie.</p>
                </div>
                <div className={styles.Con_Min}>
                    <h3 className={styles.Min_h3}>How do I contact Advantour?</h3>
                    <p className={styles.Min_p}>Should you have other questions or concerns about this privacy policy or your electronic records maintained by Advantour, please contact us.</p>
                </div>


            </div>
        </div>
    );
}

export default PolicySample