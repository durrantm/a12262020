const defaultTimeZone = 'EST';
import moment from 'moment';
const showUnixTime = (date, timeZone) => {
  const tz = timeZone === '' ? defaultTimeZone : timeZone;
  return  moment.unix(date).toLocaleString(tz).substring(16, 21);
};

export default showUnixTime;