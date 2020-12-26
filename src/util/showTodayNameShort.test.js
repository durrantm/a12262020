import showTodayNameShort from './showTodayNameShort';

describe('Test of Today day name', () => {
  it('renders page', () => {
    const result = showTodayNameShort();
    const today = Date(Date.now()).substring(0, 3);
    expect(result).toEqual(today);
  });
});