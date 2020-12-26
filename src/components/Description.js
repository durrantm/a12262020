import React from 'react';

const Description = ( data ) => {
  const text = data.text;
  if (text.match(/(heavy|thunder|blizzard)/i)) {
    return <span className="alert snow"> { text }</span>;
  }
  return <span className="snow">
    { text }
  </span>;
};

export default Description;