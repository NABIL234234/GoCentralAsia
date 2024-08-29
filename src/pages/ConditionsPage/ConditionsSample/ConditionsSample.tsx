import styles from "./ConditionsSample.module.css"

const ConditionsSample = () => {
    return (
        <div className={styles.list}>
             <h2 className={styles.list_h2}>Terms & Conditions</h2>
            <div className={styles.list_con}>
                <div>
                    <h3 className={styles.con_h3}>Prices</h3>
                    <p className={styles.con_p}>Published prices are based on costs at the time of publication. We reserve the right to change published prices at any time before your booking is made. We reserve the right to increase the cost of your holiday if the Government imposes new taxes or increases existing taxes, the currency fluctuates, or fuel charges increase. We will inform you of any increases. Discounts, including Return Customer Discount, cannot be combined with other discounts and/or promotional prices. The greater discount will always apply.</p>
                </div>
                <div>
                    <h3 className={styles.con_h3}>Payments</h3>
                    <p className={styles.con_p}>A non-refundable deposit of 20%, but not less than US$300, must be made and a confirmation issued by the Company before any binding contract exists. Once we receive your deposit we will invoice you for the remainder of the tour cost. This must be paid not less than 45 days before the start of the tour (or by an alternative date agreed between you and the Company). If you book less than 45 days before departure, you must pay for the tour in full as soon as you book, unless you make alternative arrangements with the Company. If you do not pay your balance by the agreed time, the Company reserves the right to cancel your booking or pursue any unpaid monies.
                    </p>
                </div>
                <div>
                    <h3 className={styles.con_h3}>Cancellation Policy</h3>
                    <p className={styles.con_p}>Payment for the tour is a fundamental part of the tour’s income and contributes to the overall
                        cost of equipment, running costs, staffing, administration, etc. As the Company will have
                        incurred the majority of its costs before the tour starts, we need to impose cancellation
                        charges to cover these costs.</p>
                    <p>Deposits are non-refundable. If you cancel your booking, we will impose cancellation charges as follows:</p>

                    <div>
                        <p className={styles.con_p}>
                            <span className={styles.dot}></span>
                            30 days or more prior to departure – loss of deposit
                        </p>
                        <p className={styles.con_p}>
                            <span className={styles.dot}></span>
                            15-29 days before departure – 30% of tour cost*
                        </p>
                        <p className={styles.con_p}>
                            <span className={styles.dot}></span>
                            7-14 days before departure – 50% of tour cost*
                        </p>
                        <p className={styles.con_p}>
                            <span className={styles.dot}></span>
                            3-6 days before departure – 80% of tour cost*
                        </p>
                        <p className={styles.con_p}>
                            <span className={styles.dot}></span>
                            48 hours or fewer before departure – 100% of tour cost*
                        </p>
                        <p className={styles.con_p}>*or deposit if greater.</p>
                        <p  className={styles.con_p}>Tailor-made tours may be subject to alternative cancellation terms, which will be communicated to applicable Clients at the time of booking.</p>
                        <p className={styles.con_p}>
                            All cancellations must be in writing and be made by the person who submitted the booking form. Please send an email to your contact at the Company, with a copy to info@advantour.com.
                        </p>
                        <p className={styles.con_p}>Once the tour has started, no refund for any unused portion or part of the tour or services to be provided will be given. If you want to make any changes to the tour, or depart the tour early, such alteration or departure will be entirely at your own expense and liability. You will also need to communicate in writing to the tour operator your reason for leaving the tour.</p>
                    </div>
                </div>
                <div>
                <h3 className={styles.con_h3}>Cancellation by the Company</h3>
                    <p>We reserve the right to cancel the contract between us for any reason prior to your payment of the full price of the trip. In this case, we will refund in full any amount that you have already paid us. After you have paid in full, we will only cancel the contract if circumstances beyond our control make it unavoidable. Such circumstances include, but are not limited to, civil or political unrest, terrorism, natural disaster, or other force majeure circumstance. In the unlikely event that such circumstances arise, we will contact you immediately and offer you the choice of equivalent services or a full refund of all monies paid. No additional compensation will be paid over and above the total sum received from you.</p>
                </div>
                <div>
                    <h3 className={styles.con_h3}>Alteration of Itineraries</h3>
                    <p className={styles.con_p}>It is unlikely that the Company will have to make changes to your tour. However, we may occasionally have to make changes either before or after you have booked. Most changes will be minor, and the Company will advise you of them as soon as possible. The Company reserves the right to alter the itinerary after departure, without paying compensation, if it is in your interest to do so. Furthermore, the Company will not pay compensation if it is forced to cancel or in any way change the tour due to force majeure, such as war, riots, civil strike, industrial dispute, terrorist activity, natural or nuclear disaster, fire, adverse weather conditions, or other material external circumstances beyond the Company’s control.</p>
                </div>
                <div>
                    <h3 className={styles.con_h3}>Travel Insurance</h3>
                    <p className={styles.con_p}>The Company is not responsible for unforeseen circumstances such as flight or train delays or cancellations; the failure of embassies or consulates to issue visas; the inaccessibility of certain tourist attractions due to the actions of government bodies; the actions or services of accommodation and other facilities visited during the tour; or incidents such as injury, illness, or loss of personal belongings.</p>
                    <p className={styles.con_p}>Therefore, travel insurance is mandatory for all Clients. At the time of booking, each Client must arrange his or her own insurance with a reputable insurer, with protection for the full duration of the tour, to cover personal injury, medical expenses, repatriation expenses, loss of luggage, and the expenses associated with cancellation or curtailment of a tour.</p>
                    <p className={styles.con_p}>If you become ill, all hospital expenses, doctor fees, and repatriation costs are your responsibility and the Company shall not be liable for any refund of the tour cost.</p>
                </div>
            </div>
        </div>
    );
};

export default ConditionsSample;