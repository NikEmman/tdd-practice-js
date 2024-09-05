export function sum(a, b) {
  return a + b;
}
export function capitalize(string) {
  return (
    string.charAt(0).toUpperCase() +
    string
      .slice(1)
      .split("")
      .map((char) => char.toLowerCase())
      .join("")
  );
}
export function reverse(string) {
  return string.split("").reverse().join("");
}

export function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.add = function () {
    return a + b;
  };
  this.subtract = function () {
    return a - b;
  };
  this.multiply = function () {
    return a * b;
  };
  this.divide = function () {
    return a / b;
  };
}

export function ceasarCipher(string, number) {
  return string
    .split("")
    .map((char) => charToAscii(char))
    .map((ascii) => asciiToChar(ascii, number))
    .join("");
}
function charToAscii(char) {
  return char.charCodeAt(0);
}
function asciiToChar(ascii, number) {
  let newAscii;

  if (ascii < 64) {
    newAscii = ascii;
  } else if (
    (ascii > 64 && ascii < 91 && ascii + number > 90) ||
    (ascii > 97 && ascii < 123 && ascii + number > 122)
  ) {
    newAscii = ascii + number - 26;
  } else {
    newAscii = ascii + number;
  }

  return String.fromCodePoint(newAscii);
}

export function analyzeArray(array) {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };
}
function average(array) {
  let sum = 0;
  array.forEach((char) => (sum += char));
  return sum / array.length;
}
function min(array) {
  return Math.min(...array);
}
function max(array) {
  return Math.max(...array);
}
