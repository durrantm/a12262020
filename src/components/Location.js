import React from 'react';
import UImodeContext from '../UImodeContext';
import { object } from 'prop-types';

const Location = ( { location } ) => {
  return (
    <>
      <UImodeContext.Consumer>
        {UImode =>
          <span>
            <span
              id="location-city-state"
              data-testid="location-city-state"
              className={`${UImode}`}>
              {location.city}&nbsp;{location.state}
            </span>
            <br />
            <div className="timezone" > {location.timeZone} <br />
            </div>
          </span>
        }
      </UImodeContext.Consumer>
    </>
  );
};

Location.propTypes = {
  location: object,
};
export default Location;