import styles from './TourismBlog.module.css'
import TagsBlog from "../TagsBlog/TagsBlog.tsx";

const TourismBlog = () =>{
    return (<div className={styles.Container}>
        <div className={styles.ContainerText}>
            <h2>Tourism</h2>
            <p>Twenty years ago not many people travelled overseas for their holidays. The majority of people stayed to
                have holidays in their country. Today the situation is different and the world seems much smaller.</p>
            <p>It is possible to book a holiday to a seaside resort on the other side of the world. Staying at home, you
                can book it through the Internet or by phone. The plane takes you straight there and within some hours
                of leaving your country, you can be on a tropical beach, breathing a super clean air and swimming in
                crystal warm water of tropical sea.</p>
            <p>We can travel by car, by train or plane, if we have got a long distance tour. Some young people prefer
                walking or hitch-hike travelling, when you travel, paying nearly nothing. You get new friends, lots of
                fun and have no idea where you will be tomorrow. It has great advantages for the tourists, who want to
                get the most out of exploring the world and give more back to the people and places visited. If you like
                mountains, you could climb any mountains around the globe and there is only one restriction. It is
                money. If you like travelling, you have got to have some money, because it is not a cheap hobby indeed.
                The economy of some countries is mainly based on tourism industry. Modern tourism has become a highly
                developed industry, because any human being is curious and inquisitive, we like leisure, visit other
                places. That is why tourism prospers.</p>
            <p>People travel from the very beginning of their civilization. Thousands years ago all people were nomads
                and collectors. They roamed all their lives looking for food and better life. This way human beings
                populated the whole planet Earth. So, travelling and visiting other places are the part of our
                consciousness. That is why tourism and travelling are so popular.</p>
            <p>Nowadays tourism has become a highly developed business. There are trains, cars and air jet liners, buses, ships that provide us with comfortable and secure travelling.</p>
            <p>If we travel for pleasure, by all means one would like to enjoy picturesque places they are passing through, one would like seeing the places of interest, enjoying the sightseeing of the cities, towns and countries.</p>
            <p>Nowadays people travel not only for pleasure but also on business. People have to go to other countries for taking part in different negotiations, for signing some very important documents, for participating in different exhibitions, in order to exhibit the goods of own firm or company. Travelling on business helps people to get more information about achievements of other companies, which will help making own business more successful.</p>
            <p>There are a lot of means of travelling: travelling by ship, by plane, by car, walking. It depends on a person to decide which means of travelling one would prefer.</p>
        </div>
        <TagsBlog/>
    </div>)
}

export default TourismBlog;