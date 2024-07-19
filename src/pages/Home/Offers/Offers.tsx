import './Offers.scss'

//components
import Title from "../../../components/Title/Title.tsx";
import SeeMore from "../../../components/buttons/SeeMore/SeeMore.tsx";

//images
import TourImg from "../../../assets/Images/Tour.png";

//icons
import { MdAccessTimeFilled } from "react-icons/md";
import { RiMapPinFill } from "react-icons/ri";

function Offers() {
  return (
    <div className="group_tour">
      <div className="container">
        <Title
          mainText="MOST POPULAR TOURS"
          paragraph="Discover our top-rated and highly sought-after tours that have captured the hearts of travelers worldwide."
        />
        <div className="tour_cards">
          <div className="tour_card">
            <img src={TourImg} alt="Alai Heights, Kyrgyzstan"/>
            <div className="tour_info_block">
              <div className="days">
                <MdAccessTimeFilled/>
                <h5>7D/6N</h5>
              </div>
              |
              <div className="country_point">
                <RiMapPinFill/>
                <h5>Kyrgyzstan</h5>
              </div>
            </div>
            <div className="tour_desc">
              <h4>Alai Heights, Kyrgyzstan</h4>
              <p>Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.</p>
            </div>
            <div className="offer_badge">
              <span>20% Off</span>
            </div>
            <div className="price">
              <span className="price_title">Price:</span>
              <span className="old_price">$1300</span>
              <span className="new_price">$1105</span>
            </div>
          </div>
          <div className="tour_card">
            <img src={TourImg} alt="Alai Heights, Kyrgyzstan"/>
            <div className="tour_info_block">
              <div className="days">
                <MdAccessTimeFilled />
                <h5>7D/6N</h5>
              </div>
              |
              <div className="country_point">
                <RiMapPinFill />
                <h5>Kyrgyzstan</h5>
              </div>
            </div>
            <div className="tour_desc">
              <h4>Alai Heights, Kyrgyzstan</h4>
              <p>Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.</p>
            </div>
            <div className="offer_badge">
              <span>20% Off</span>
            </div>
            <div className="price">
              <span className="price_title">Price:</span>
              <span className="old_price">$1300</span>
              <span className="new_price">$1105</span>
            </div>
          </div>
          <div className="tour_card">
            <img src={TourImg} alt="Alai Heights, Kyrgyzstan"/>
            <div className="tour_info_block">
              <div className="days">
              <MdAccessTimeFilled />
                <h5>7D/6N</h5>
              </div>
              |
              <div className="country_point">
                <RiMapPinFill />
                <h5>Kyrgyzstan</h5>
              </div>
            </div>
            <div className="tour_desc">
              <h4>Alai Heights, Kyrgyzstan</h4>
              <p>Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.</p>
            </div>
            <div className="offer_badge">
              <span>20% Off</span>
            </div>
            <div className="price">
              <span className="price_title">Price:</span>
              <span className="old_price">$1300</span>
              <span className="new_price">$1105</span>
            </div>
          </div>
        </div>
        <SeeMore title="See More" />
      </div>
    </div>
  );
}

export default Offers;
