import './UnveilingCentralAsia.scss'

//components
import Title from "../../../components/Title/Title.tsx";

//images
import CentralAsia from "../../../assets/Images/CentralAsia.png"
import Union1 from "../../../assets/Images/un1.png"
import Union2 from "../../../assets/Images/un2.png"
import Union3 from "../../../assets/Images/un3.png"
import Union4 from "../../../assets/Images/un4.png"
import Union5 from "../../../assets/Images/un5.png"
import Line5 from "../../../assets/Images/Line5.png"


function UnveilingCentralAsia() {
  return (
    <div className="unveiling_central_asia">
      <div className="container">
        <Title mainText="Unveiling central Asia" paragraph="Discover the hidden treasures and rich cultural tapestry of Central Asia with [Travel Website Name].  Let us unveil the beauty and mystique of Central Asia, creating memories that will last a lifetime." />
        <div className="central_asia_map">
          <img className="central_asia" src={CentralAsia} alt="CantraAsia"/>
          <img className="Union1" src={Union1} alt="Union1"/>
          <img className="Union2" src={Union2} alt="Union2"/>
          <img className="Union3" src={Union3} alt="Union3"/>
          <img className="Union4" src={Union4} alt="Union4"/>
          <img className="Line5"  src={Line5} alt="Line5"/>
          <img className="Union5" src={Union5} alt="Union5"/>
        </div>
      </div>
    </div>
  );
}

export default UnveilingCentralAsia;