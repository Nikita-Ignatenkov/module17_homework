export function countDown(n) {
    if (typeof n !== 'number' || n < 0) {
      return 'Error: Invalid argument! The argument must be a non-negative number.';
    }
    while (n > 0) {
        return n;
        n = n - 1;
    }
    return 'GO!';
  }