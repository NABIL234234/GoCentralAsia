
import './PopularTour.scss'

//components
import Title from "../../../components/Title/Title.tsx";
import SeeMore from "../../../components/buttons/SeeMore/SeeMore.tsx";

//images
import TourImg from "../../../assets/Images/Tour.png";

//icons
import {MdAccessTimeFilled} from "react-icons/md";
import {RiMapPinFill} from "react-icons/ri";


function PopularTour() {
  return (
    <div className="group_tours">
      <div className="container">
        <Title mainText="MOST POPULAR TOURS"
               paragraph="Discover our top-rated and highly sought-after tours that have captured the hearts of travelers worldwide."/>
        <div>
          <div className="tour_cards">
            <div className="tour_card">
              <img src={TourImg} alt=""/>

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
            </div>
            <div className="tour_card">
              <img src={TourImg} alt=""/>

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
            </div>
            <div className="tour_card">
              <img src={TourImg} alt=""/>
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
            </div>
          </div>
          <SeeMore title="See More"/>
        </div>
      </div>
    </div>
  );
}

export default PopularTour;