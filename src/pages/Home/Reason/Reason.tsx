import "./Reason.scss"

//components
import Title from "../../../components/Title/Title.tsx";
import SeeMore from "../../../components/buttons/SeeMore/SeeMore.tsx";

//images
import ReasonImage from "../../../assets/Images/central_asia.png";

function Reason() {
  return (
    <div className="Reason">
      <div className="container">
        <Title mainText="Why choose Gocentralasia ?"
               paragraph="Find answers to commonly asked questions to help you plan your travels smoothly. If you have any additional queries or need further assistance, feel free to reach out to our friendly customer support team."/>
        <div className="central_asia_img">
          <img src={ReasonImage} alt=""/>
        </div>
        <SeeMore title="About Us"/>
      </div>
    </div>
  );
}

export default Reason;