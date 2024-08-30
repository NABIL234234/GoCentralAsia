import styles from './TagsBlog.module.css';

const TagsBlog = () => {
    const tags = [
        'Is Kyrgyzstan Worth Visiting?', 'Your Dream Vacation', 'Visa Matters',
        'Is Kyrgyzstan Safe for Travel?', 'Choose Your Transport', 'Kyrgyzstan Travel Seasons',
        'Kyrgyzstan Travel Map', 'At Your Service', 'Holidays and Festivals'
    ];

    return (
        <div className={styles.Container}>
            <h2>Tags</h2>
            <div className={styles.Container_Tags}>{tags.map((tag, index) => (
                <a href={'#'} key={index} className={styles.tag}>
                    {tag}
                </a>
            ))}</div>

        </div>
    );
};

export default TagsBlog;
