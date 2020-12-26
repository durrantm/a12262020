import React from 'react';
import { string, func } from 'prop-types';

const ZipForm = ({ zip, updateZip }) => {
  const noSubmit = () => preventDefault();  // eslint-disable-line no-undef
  return (
    <form onSubmit={noSubmit} >
      <input type="text"
        placeholder="zip"
        value={ zip }
        onChange={updateZip}
        data-testid="zip-input"
        size="5" maxLength="10" className="zip-input" autoFocus
      />
      <span
        className="reload-link"
        onClick={() => history.go(0)} > { /* eslint-disable-line no-undef */}
        <img src="./reload.png" />
      </span>
    </form>
  );
};

ZipForm.propTypes = {
  zip: string,
  updateZip: func,
};

export default ZipForm;
