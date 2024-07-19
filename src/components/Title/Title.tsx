import React from 'react';

import './Title.scss'

type Title = {
  mainText: string,
  paragraph: string
}

const Title: React.FC<Title> = ({mainText, paragraph}) => {
  return (
    <div className="title_text">
      <h2>{mainText}</h2>
      <p>
        {paragraph}
      </p>
    </div>
  );
}

export default Title;