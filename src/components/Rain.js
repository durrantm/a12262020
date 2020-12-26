import React from 'react';
import round from '../util/round';

const Rain = ( data ) => {
  const inches = round(Number(data.inches), 1);
  if (inches > 1) {
    return <span className="alert"> { inches }<small>&rdquo;</small></span>;
  }
  return <span> { inches }<small>&rdquo;</small> </span>;
};

export default Rain;