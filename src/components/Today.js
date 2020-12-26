import { string } from 'prop-types';
import React from 'react';
import showTodayNameShort from '../util/showTodayNameShort';
import monthName from '../util/showMonthName';
import UImodeContext from '../UImodeContext';

const Today = () => {
  function format(date) {
    const dayOfMonth = date.getDate();
    const dayName = showTodayNameShort();
    const month = date.getMonth();
    const theMonthName = monthName(month);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hours12 = hours % 12;
    hours = hours12 === 0 ? '12' : hours12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strDate = `${dayName} ${theMonthName} ${dayOfMonth}`;
    const strTime = `${hours}:${minutes}${ampm}`;
    return [strDate, strTime];
  }
  const today = format(new Date());
  const [date, time] = today;
  return (
    <span>
      <UImodeContext.Consumer>
        {UImode =>
          <div id="date-time" className={UImode} >
            &nbsp; {date}
            &nbsp;&nbsp; {time}
          </div>
        }
      </UImodeContext.Consumer>
    </span>
  );
};

Today.propTypes = {
  UImode: string
};

export default Today;