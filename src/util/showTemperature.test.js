import showTemperature from './showTemperature';

describe('Temperature tests', () => {
  it('show temperature rounded down to 2 decimal placed', () => {
    const result = showTemperature(1.494949);
    expect(result).toEqual(" 01");
  });
  it('shows temperature rounded up to 2 decimal placed', () => {
    const result = showTemperature(1.5051);
    expect(result).toEqual(" 02");
  });
  it('100', () => {
    const temp = showTemperature(100);
    expect(temp).toEqual(' 100');
  });
  it('23', () => {
    const temp = showTemperature(23);
    expect(temp).toEqual(' 23');
  });
  it('5', () => {
    const temp = showTemperature(5);
    expect(temp).toEqual(' 05');
  });
  it('0', () => {
    const temp = showTemperature(0);
    expect(temp).toEqual('0');
  });
  it('-1', () => {
    const temp = showTemperature(-1);
    expect(temp).toEqual('-01');
  });
  it('-5', () => {
    const temp = showTemperature(-5);
    expect(temp).toEqual('-05');
  });
  it('-15', () => {
    const temp = showTemperature(-15);
    expect(temp).toEqual('-15');
  });
});


