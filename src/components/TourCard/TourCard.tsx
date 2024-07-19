// import TourImg from "../../../src/assets/Images/Tour.png"
// import {MdAccessTimeFilled} from "react-icons/md";
// import {IoMdPeople} from "react-icons/io";
// import {RiMapPinFill} from "react-icons/ri";
//
// type TourCardProps = {
//   price: string,
//   days: string,
//   people: string,
//   countryPoint: string,
//   mainText: string,
//   tourDescription: string,
// }
//
// const TourCard: React.FC<TourCardProps> = ({price, days, people, countryPoint, mainText, tourDescription}) => {
//   return (
//     <div className="tour_card">
//       <img src={TourImg} alt=""/>
//       <div className="price">
//         <h4>{price}</h4>
//       </div>
//       <div className="tour_info_block">
//         <div className="days">
//           <MdAccessTimeFilled/>
//           <h5>{days}</h5>
//         </div>
//         |
//         <div className="people">
//           <IoMdPeople/>
//           <h5>{people}</h5>
//         </div>
//         |
//         <div className="country_point">
//           <RiMapPinFill/>
//           <h5>{countryPoint}</h5>
//         </div>
//       </div>
//       <div className="tour_desc">
//         <h4>{mainText}</h4>
//         <p>{tourDescription}</p>
//       </div>
//     </div>
//   );
// }
//
// export default TourCard;