import styles from './ContentBlog.module.css';
import CoffiShop from '../../../assets/Images/CoffiShop.svg';
import Eat from '../../../assets/Images/Eat.svg';
import Forest from '../../../assets/Images/Forest.svg';
import Fox from '../../../assets/Images/Fox.svg';
import Hike from '../../../assets/Images/Hike.svg';
import Lake from '../../../assets/Images/Lake.svg';
import Mountains from '../../../assets/Images/Mountains.svg';
import Snacks from '../../../assets/Images/Snacks.svg';
import TravelDestination from "../../../components/SidePanel/TravelDestination/TravelDestination.tsx";

const ContentBlog = () => {
    const cards = [
        {
            img: CoffiShop,
            h2: 'Kyrgyzstan',
            p: 'Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque natural places as Kyrgyzstan...',
        }, {
            img: Eat,
            h2: 'Kyrgyzstan',
            p: 'Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque natural places as Kyrgyzstan...',
        }, {
            img: Forest,
            h2: 'Kyrgyzstan',
            p: 'Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque natural places as Kyrgyzstan...',
        }, {
            img: Fox,
            h2: 'Kyrgyzstan',
            p: 'Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque natural places as Kyrgyzstan...',
        }, {
            img: Hike,
            h2: 'Kyrgyzstan',
            p: 'Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque natural places as Kyrgyzstan...',
        }, {
            img: Lake,
            h2: 'Kyrgyzstan',
            p: 'Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque natural places as Kyrgyzstan...',
        }, {
            img: Mountains,
            h2: 'Kyrgyzstan',
            p: 'Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque natural places as Kyrgyzstan...',
        }, {
            img: Snacks,
            h2: 'Kyrgyzstan',
            p: 'Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque natural places as Kyrgyzstan...',
        }
    ];

    const destinations = [
        'Altyn Arashan', 'Arslanbob', 'Batken', 'Bishkek', 'Burana Tower', 'Cholpon-Ata', 'Chon-Kemin', 'Issyk-Kul', 'Jalalabad', 'Karakol'
    ]

    return (
        <div className={styles.Content}>

            <div className={styles.Container_Cards}>
                <h2>Blog</h2>
                <div className={styles.Cards_Con}>
                    {cards.map((card, index) => (
                        <div key={index} className={styles.Cards}>
                            <div className={styles.CardImgCon}>
                                <img src={card.img} alt={card.h2} className={styles.CardImage}/>
                            </div>
                            <div>
                                <h2 className={styles.CardTitle}>{card.h2}</h2>
                                <p className={styles.CardText}>{card.p}</p>
                                <a className={styles.CardLink} href={'#'}>Read more</a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.ContainerRecent}>

                <div className={styles.RecentPosts}>
                    <h3>Recent Posts</h3>
                    <div className={styles.PostsCard}>
                        <div className={styles.PostsCardImg}></div>
                        <h4>Kyrgyzstan</h4>
                    </div>
                    <div className={styles.PostsCard}>
                        <div className={styles.PostsCardImg}></div>
                        <h4>Kyrgyzstan</h4>
                    </div>
                </div>
                <TravelDestination items={destinations}/>
            </div>
        </div>
    );
};

export default ContentBlog;
