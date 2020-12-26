import React from 'react';
import round from '../util/round';

const Snow = ( data ) => {
  const inches = round(Number(data.inches), 0);
  if (inches > 2) {
    return <span data-testid="snow" className="alert"> { inches }<small>&rdquo;</small></span>;
  }
  return <span data-testid="snow"> { inches }<small>&rdquo;</small> </span>;
};

export default Snow;