import {getPercents} from '../getPercents.js';

const percent = 20;
const number = 100;

describe('tests for getPercents function', () => {
  it('function returns the correct result or error', () => {
    expect(getPercents(percent, number)).toBe(20);
    expect(getPercents()).toBe(NaN);
    expect(getPercents(0, number)).toBe(0);
    expect(getPercents(percent, 0)).toBe(0);
    expect(getPercents(100, number)).toBe(100);
    expect(getPercents("sdr", number)).toBe(NaN);
  });
});