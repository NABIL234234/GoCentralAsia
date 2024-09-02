import styles from './AboutUsIntroduction.module.css' ;
import Map from "../../../assets/Images/Frame 288.svg";
import materialSymbolsNature from '../../../assets/Images/material-symbols_nature-outline.svg';
import ouiUsers from '../../../assets/Images/oui_users.svg';
import tdesignMap from '../../../assets/Images/tdesign_map-information-1.svg';
import MediaMap from '../../../assets/Images/Frame 291.svg';
import TravelDestination from "../../../components/SidePanel/TravelDestination/TravelDestination.tsx";

const AboutUsIntroduction = () => {

  const destinations = ['Kyrgyzstan', 'Kazakhstan', 'Uzbekistan', 'Tajikistan', 'Turkmenistan'];

  return <div className={styles.AboutUsIntroduction_Con}>
    <div className={styles.Con_Bl}>
      <h2>About Us</h2>
      <div className={styles.Bl_Content}>
        <div className={styles.Content_Text}>
          <h3>Welcome to GoCentralAsia.com!</h3>
          <p>At GoCentralAsia, we are passionate about unlocking the mysteries and wonders of Central Asia for
            travelers from around the globe. Our mission is to provide you with an immersive, authentic, and
            unforgettable travel experience that captures the rich cultural heritage, stunning landscapes,
            and warm hospitality of this extraordinary region.</p>
        </div>
        <div className={styles.Content_Img}>
          <img src={Map} alt={'Map img'}/>
        </div>
        <div className={styles.Content_Img_Med}>
          <img src={MediaMap} alt={'Map img'}/>
        </div>
        <div className={styles.Content_Text}>
          <h3>Our Story</h3>
          <div className={styles.Text_Line1}></div>
          <p>Founded in 2022, GoCentralAsia was born out of a love for adventure and a deep appreciation for
            the unique beauty of Central Asia. Our founders, avid travelers with extensive experience
            exploring this captivating part of the world, saw a need for a dedicated platform that offers
            comprehensive and reliable travel information, resources, and services tailored specifically to
            Central Asia.</p>
        </div>
        <div className={styles.Content_Text}>
          <h3>What We Offer</h3>
          <div className={styles.Text_Line2}></div>
          <div className={styles.Text_Paragraphs}>
            <p><span>Curated Travel Guides:</span> Our in-depth travel guides cover everything you need to
              know about the top destinations in Central Asia, including Kazakhstan, Kyrgyzstan,
              Uzbekistan, Turkmenistan, and Tajikistan. From historic cities and ancient Silk Road sites
              to breathtaking mountain ranges and serene lakes, we provide detailed insights and practical
              tips to help you plan your journey.</p>
            <p><span>Tailored Itineraries:</span> Whether you are an adventure seeker, a cultural
              enthusiast, or a leisure traveler, our customized itineraries are designed to match your
              interests and preferences. We take care of the details so you can focus on enjoying your
              trip.</p>
            <p><span>Expert Advice:</span> Our team of travel experts is here to assist you with
              personalized recommendations, local insights, and answers to any questions you may have. We
              are committed to ensuring your travel experience is seamless and enjoyable.</p>
            <p><span>Booking Services:</span> From flights and accommodations to guided tours and local
              experiences, we offer a range of booking services to make your travel planning hassle-free.
              Our partnerships with trusted local providers ensure you receive the best quality and value.
            </p>
          </div>
        </div>
        <div className={styles.Content_Cards}>
          <h3>Why Travel with Us?</h3>
          <div className={styles.Text_Line3}></div>
          <div className={styles.Cards}>
            <div className={styles.Card}>
              <img src={materialSymbolsNature} alt={'materialSymbolsNature'}/>
              <h4>Sustainable Tourism:</h4>
              <p>We believe in responsible travel that respects the environment, supports local
                communities, and preserves cultural heritage. We strive to promote sustainable tourism
                practices in all our offerings.</p>
            </div>
            <div className={styles.Card}>
              <img src={ouiUsers} alt={'ouiUsers'}/>
              <h4>Customer-Centric Approach:</h4>
              <p>Your satisfaction is our top priority. We are dedicated to providing exceptional service
                and creating memorable travel experiences that exceed your expectations.</p>
            </div>
            <div className={styles.Card}>
              <img src={tdesignMap} alt={'tdesignMap'}/>
              <h4>Local Expertise: </h4>
              <p>Our deep-rooted connections and extensive knowledge of Central Asia enable us to offer
                authentic experiences that go beyond the typical tourist attractions.</p>
            </div>
          </div>
        </div>
        <div className={styles.Content_Text}>
          <h3>Join Our Community</h3>
          <div className={styles.Text_Line4}></div>
          <div className={styles.Text_Paragraphs}>
            <p>At GoCentralAsia, we believe that travel is not just about the destinations but also about
              the stories, connections, and memories created along the way. Join our community of
              travelers and explorers, share your experiences, and be inspired by the adventures of
              others.
            </p>
            <p>Follow us on social media, subscribe to our newsletter, and stay updated with the latest
              travel tips, news, and exclusive offers.
            </p>
            <p>Discover Central Asia with GoCentralAsia – Your Gateway to an Unforgettable Journey!
            </p>
            <p>Feel free to reach out to us at [contact email] for any inquiries or assistance. We look
              forward to helping you explore the wonders of Central Asia!</p>
          </div>
        </div>
      </div>
    </div>
    <TravelDestination title="Destinations" items={destinations} className={styles.destination}/>
  </div>
}

export default AboutUsIntroduction;