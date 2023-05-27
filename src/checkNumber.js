export function checkNumber(value) {
    if (typeof value !== 'number') {
      return 'упс, это ты как так смог?';
    }
    if (isNaN(value)) {
      return 'упс, непотребство! NaN';
    }
    return value % 2 === 0 ? 'even' : 'odd';
  }