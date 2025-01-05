function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Division by zero';
  }
  return a / b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operation';
  }
}

console.log(calculate(5, 3, '+')); // 8
console.log(calculate(5, 3, '-')); // 2
console.log(calculate(5, 3, '*')); // 15
console.log(calculate(5, 3, '/')); // 1.666...
console.log(calculate(5, 0, '/')); // Division by zero