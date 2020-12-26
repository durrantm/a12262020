const showTodayNameShort = () => {
  const today = Date.now();
  return Date(today).substring(0, 3);
};

export default showTodayNameShort;