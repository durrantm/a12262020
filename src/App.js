import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ZipForm from './components/ZipForm';
import Location from './components/Location';
import Conditions from './components/Conditions';
import Daily from './components/Daily';
import Hourly from './components/Hourly';
import ToggleUImode from './components/ToggleUImode';
import { redlineJSONheader } from './JSONheaders';
import UImodeContext from './UImodeContext';
import toggleUImode from './util/toggleUImode';

function App() {
  const [zip, setZip] = useState(localStorage.getItem('zip') || '02140'); // eslint-disable-line no-undef
  const [location, setLocation] = useState({});
  const [latLong, setLatLong] = useState([0, 0]);
  // eslint-disable-next-line no-undef
  const [UImode, setUImode] = useState(localStorage.getItem('edaUImode') || 'light-mode');
  const redlineZipcodeLocation = redlineJSONheader(zip);
  const resetLocation = () => {
    setLocation({});
  };
  const setLocationDetails = (response) => {
    setLatLong([response.data.lat, response.data.lng]);
    setLocation({
      city: response.data.city,
      state: response.data.state,
      timeZone: response.data.timezone.timezone_abbr,
    });
  };
  useEffect(() => {
    if (zip.length === 5 && !isNaN(zip)) {
      // Axios call #1 for zip, town, state and Timezone (top header)
      axios.request(redlineZipcodeLocation)
        .then(function (response) {
          setLocationDetails(response);
        })
        .catch(function (e) {
          console.log(e);
        });
    }
    if (zip.length !== 5 || isNaN(zip)) {
      resetLocation();
    }
  }, [zip, ...latLong]);
  const updateZip = (event) => {
    const zip = event.target.value;
    setZip(zip);
    localStorage.setItem('zip', zip); // eslint-disable-line no-undef
  };
  const toggleMode = () => {
    toggleUImode(UImode, setUImode);
  };
  //ignore - document.body.style.className = UImode; // eslint-disable-line no-undef
  return (
    <Router>
      <UImodeContext.Provider value={`${UImode}`}>
        <div className={`${UImode} centered`} >
          <ToggleUImode toggleUImode = { toggleMode } />
          <span className="flex-container-location-conditions">
            <section id="location" className={`${UImode}`}>
              <ZipForm zip={zip} updateZip={updateZip} />
              <Location location={location} />
            </section>
            <Conditions zip={zip} />
          </span>
          {latLong[0] &&
            <Switch>
              <Route exact path="/daily">
                <Daily zip={zip} latLong={latLong} timeZone={location.timeZone} />
              </Route>
              <Route exact path="/hourly">
                <Hourly zip={zip} latLong={latLong} timeZone={location.timeZone} />
              </Route>
              <Route exact path="/">
                <Redirect to="/daily" />
              </Route>
            </Switch>
          }
          <section id="radar-map">
            <div> ~~~ map goes here ( &apos; 3rd&apos; view) ~~~</div>
          </section>
        </div>
      </UImodeContext.Provider>
    </Router>
  );
}

export { App as default };