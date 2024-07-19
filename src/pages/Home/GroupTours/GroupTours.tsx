import './GroupTours.scss'

//components
import Title from "../../../components/Title/Title.tsx";

//images
import TourImg from "../../../assets/Images/Tour.png"

//icons
import {MdAccessTimeFilled} from "react-icons/md";
import {IoMdPeople} from "react-icons/io";
import {RiMapPinFill} from "react-icons/ri";
import SeeMore from "../../../components/buttons/SeeMore/SeeMore.tsx";

function GroupTours() {
  return (
    <div className="group_tours">
      <div className="container">
        <Title mainText="Group TOURS"
               paragraph="Discover our top-rated and highly sought-after tours that have captured the hearts of travelers worldwide."/>
        <div>
          <div className="country_category_list">
            <h5>Multi-country</h5>
            <h5>Kyrgyzstan</h5>
            <h5>Kazakhstan</h5>
            <h5>Uzbekistan</h5>
            <h5>Tajikistan</h5>
            <h5>Turkmenistan</h5>
          </div>
          <div className="tour_cards">
            <div className="tour_card">
              <img src={TourImg} alt=""/>
              <div className="price">
                <h4>$1900/per person</h4>
              </div>
              <div className="tour_info_block">
                <div className="days">
                  <MdAccessTimeFilled/>
                  <h5>7D/6N</h5>
                </div>
                |
                <div className="people">
                  <IoMdPeople/>
                  <h5>People: 5</h5>
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
            </div>
            <div className="tour_card">
              <img src={TourImg} alt=""/>
              <div className="price">
                <h4>$1900/per person</h4>
              </div>
              <div className="tour_info_block">
                <div className="days">
                  <MdAccessTimeFilled/>
                  <h5>7D/6N</h5>
                </div>
                |
                <div className="people">
                  <IoMdPeople/>
                  <h5>People: 5</h5>
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
            </div>
            <div className="tour_card">
              <img src={TourImg} alt=""/>
              <div className="price">
                <h4>$1900/per person</h4>
              </div>
              <div className="tour_info_block">
                <div className="days">
                  <MdAccessTimeFilled/>
                  <h5>7D/6N</h5>
                </div>
                |
                <div className="people">
                  <IoMdPeople/>
                  <h5>People: 5</h5>
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
            </div>
          </div>
          <SeeMore title="See More" />
        </div>
      </div>
    </div>
  );
}

export default GroupTours;