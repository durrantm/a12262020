import round from './round';

const showTemperature = (temperature) => {
  const temp = round(Number(temperature));
  const tempAbsolute = Math.abs(temp);
  let formattedTemp = String(temp);
  if (temp > 0 && temp <= 9) {
    formattedTemp = `0${String(temp)}`;
  }
  if (temp > 0) {
    formattedTemp = ` ${formattedTemp}`;
  }
  if (temp === 0) {
    formattedTemp = ' 0';
  }
  if (temp < 0 && temp > -10) {
    formattedTemp = `-0${tempAbsolute}`;
  }
  return formattedTemp;
};

export default showTemperature;
