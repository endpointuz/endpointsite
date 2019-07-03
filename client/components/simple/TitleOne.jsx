import React from 'react';

const TitleOne = ({ text, style = null, className = '' }) => (
  <h1 className={`title-1 ${className && ''}`} style={style}>
    {text}
  </h1>
);

export default TitleOne;
