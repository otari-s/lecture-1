function compare(a, b) {
  if (a === b) {
    return `ტოლია`;
  } else {
    return `არ არის ტოლი`;
  }
}

console.log(compare(4, "4"));

function fahrenheitToCelsius(fahrenheit) {
  if (fahrenheit === parseInt(fahrenheit)) {
    return (fahrenheit - 32) * 0.5556;
  } else {
    return false;
  }
}
console.log(fahrenheitToCelsius(200));

function operation(a, b, operand) {
  const operators = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "/": (x, y) => x / y,
    "*": (x, y) => x * y,
  };

  if (parseInt(a) && parseInt(b) && operators[operand]) {
    return operators[operand](a, b);
  }
  return false;
}

console.log(operation(2, 2, "-"));
