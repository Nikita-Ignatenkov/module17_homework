import {checkNumber} from '../checkNumber.js'; // импортируем функцию checkNumber из файла code.js

test('returns "even" if entered number is even', () => {
  expect(checkNumber(10)).toBe('even'); // ожидаем, что checkNumber(10) вернет 'even'
});

test('returns "odd" if entered number is odd', () => {
  expect(checkNumber(7)).toBe('odd'); // ожидаем, что checkNumber(7) вернет 'odd'
});

test('returns "упс, непотребство! NaN" if entered value is NaN', () => {
  expect(checkNumber(NaN)).toBe('упс, непотребство! NaN'); // ожидаем, что checkNumber(NaN) вернет 'упс, непотребство! NaN'
});

test('returns "упс, это ты как так смог?" if entered value is not a number', () => {
  expect(checkNumber('abc')).toBe('упс, это ты как так смог?'); // ожидаем, что checkNumber('abc') вернет 'упс, это ты как так смог?'
});