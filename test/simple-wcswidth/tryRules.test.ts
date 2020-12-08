import { wcswidth } from 'simple-wcswidth';

describe('Example: Simple', () => {
  it(`Simple`, function () {
    // Step1: Define your conditional rules
    expect(wcswidth('Yes 重要')).toBe(8);
    expect(wcswidth('请你')).toBe(4);
    expect(wcswidth('Hi')).toBe(2);
  });
});
