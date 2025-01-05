function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    default:
      return 'Invalid operation';
  }
}

console.log(calculate(5, 3, '+')); // 8
console.log(calculate(5, 3, '-')); // 2
console.log(calculate(5, 3, '*')); // Invalid operation