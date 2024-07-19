import React from 'react';
import './AdventureComponent.scss'

//icons
import { IconType } from 'react-icons'; // Import IconType from react-icons
import {IoMdArrowDropdown} from "react-icons/io";

type AdventureComponentProps = {
  icon: IconType,
  title: string,

}

const AdventureComponent: React.FC<AdventureComponentProps> = ({icon: Icon, title}) => {
  return (
    <div className="Destination">
      <div className="destination-title">
        <Icon />
        <h5>{title}</h5>
      </div>
      <div className="destination-select">
        <h5>Choose</h5>
        <IoMdArrowDropdown/>
      </div>
    </div>
  );
}


export default AdventureComponent;