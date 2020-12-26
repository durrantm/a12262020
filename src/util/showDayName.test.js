import showDayName from './showDayName';

describe('test day', () => {
  it('test day (UTC day of week)', () => {
    const result = showDayName("12-15-2020");
    expect(result).toEqual('Wednesday');
  });
});

