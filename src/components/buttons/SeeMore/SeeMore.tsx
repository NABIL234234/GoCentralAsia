import React from "react";
import './SeeMore.scss'

type SeeMoreProps = {
  title: string
}

const SeeMore: React.FC<SeeMoreProps> = ({title}) => {
  return (
    <div className="button_container">
      <button>
        {title}
      </button>
    </div>
  );
};

export default SeeMore;