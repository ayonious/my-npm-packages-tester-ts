import { wcswidth } from 'simple-wcswidth';

describe('Example: Simple', () => {
  it(`Simple`, function () {
    // Step1: Define your conditional rules
    expect(wcswidth('asdf')).toBe(4);
  });
});
