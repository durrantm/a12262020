import React from 'react';
import imgIcon from '../util/imgIcon';

const Icon = ( data ) => {
  const code = data.icon;
  const imgIconPath = imgIcon(code);
  return (
    <img src = { imgIconPath }
      className = "daily-image-icon"
      alt="icon-weather"
      width="33%" height="33%"
    />);
};

export default Icon;