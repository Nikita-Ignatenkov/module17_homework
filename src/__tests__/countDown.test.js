import {countDown} from '../countDown.js';

describe('tests for countDown function', () => {
    it('returns the correct result or error', () => {
      expect(countDown(3)).toBe(3, 2, 1, 'GO!');
      expect(countDown(0)).toBe('GO!');
      expect(countDown(0.2)).toBe(0.2, 'GO!');
      expect(countDown("jdh")).toBe('Error: Invalid argument! The argument must be a non-negative number.');
      expect(countDown(-1)).toBe('Error: Invalid argument! The argument must be a non-negative number.');
    });
  });