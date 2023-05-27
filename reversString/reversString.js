export function revertString(str) {
  let result = str.split('').reverse().join('');
  return result
}
revertString('строка'); 