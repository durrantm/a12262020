import React from 'react';
import { string, number, object } from 'prop-types';
import round from '../util/round';
import imgIcon from '../util/imgIcon';
import ShowHourlyTime from './ShowHourlyTime';
import showDayNameHourly from '../util/showDayNameHourly';

const defaultTimeZone = 'EST';
const ShowDetailsRowHourly = ( { day }  ) => {
  const { weather: { description }, ts, temp: _temp, precip: _precip,
    weather, pres, app_temp, wind_spd: _wind_spd, wind_cdir, clouds, datetime, vis, timeZone } = day;
  const wind_spd = round(_wind_spd );
  const precip = round( _precip, 1);
  const timestamp_local =  showDayNameHourly( datetime ).substring(0, 3);
  const temp = round(_temp);
  const feels_like = round(app_temp);
  const icon = imgIcon(weather.icon);
  const pressure = round(pres);
  const tz = timeZone === '' ? defaultTimeZone : timeZone;
  return (
    <tr>
      <td>&nbsp;&nbsp; <small> { timestamp_local } </small> </td>
      <td> &nbsp; <ShowHourlyTime time = { ts } tz = { tz } /> </td>
      <td className="high-temperature"> { temp }° </td>
      <td className="bigger-screen-only"> { feels_like }° </td>
      <td>&nbsp;&nbsp; <img className="daily-image-icon" width="33%" height="33%" src= { icon } /> </td>
      <td className="big-screen-only"> { clouds }<small>%</small>&nbsp; </td>
      <td style={{textAlign: "right"}} className="not-on-mobile"> { description } &nbsp; </td>
      <td className="big-screen-only" align="right">
        <small>{ wind_cdir }</small>&nbsp;{ wind_spd }<small>mph</small>
      </td>
      <td className="not-on-mobile" align="right"> { precip }<small>&rdquo;</small> </td>
      <td className="bigger-screen-only" align="right"> {pressure } </td>
      <td className="full-screen-only" align="right"> { vis  }<small>miles</small> </td>
    </tr>
  );
};

ShowDetailsRowHourly.propTypes = {
  idx: number,
  day: object,
  timestamp_local: string,
  ts: number,
  temp: number,
  wind_cdir: string,
  wind_spd: number,
  weather: object,
  precip: number,
  timeZone: string
};
ShowHourlyTime.propTypes = {
  time: number,
  tz: string
};

export { ShowDetailsRowHourly as default };