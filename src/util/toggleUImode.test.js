import toggleUImode from "./toggleUImode";

describe('Toggle UImode handles all values', () => {
  it('toggles light-mode to dark-mode', () => {
    const result = toggleUImode('light-mode', () => {});
    expect(result).toEqual('dark-mode');
  });
  it('toggles dark-mode to light-mode', () => {
    const result = toggleUImode('dark-mode', () => {});
    expect(result).toEqual('light-mode');
  });
  it('toggles dark-mode to light-mode and then back to dark-mode', () => {
    const toggle = toggleUImode('light-mode', () => {});
    const toggleBack = toggleUImode(toggle, () => {});
    expect(toggleBack).toEqual('light-mode');
  });
  it('toggles Dark-Mode to light-mode (handles case difference)', () => {
    const result = toggleUImode('Dark-Mode', () => {});
    expect(result).toEqual('light-mode');
  });
  it('toggles unknown to dark-mode', () => {
    const result = toggleUImode('unknown', () => {});
    expect(result).toEqual('dark-mode');
  });
  it('toggles empty string to dark-mode', () => {
    const result = toggleUImode('', () => {});
    expect(result).toEqual('dark-mode');
  });
  it('toggles undefined value to dark-mode', () => {
    const result = toggleUImode(undefined, () => {});
    expect(result).toEqual('dark-mode');
  });
  it('toggles null to dark-mode', () => {
    const result = toggleUImode(null, () => {});
    expect(result).toEqual('dark-mode');
  });
});