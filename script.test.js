import {
  sum,
  capitalize,
  reverse,
  Calculator,
  ceasarCipher,
  analyzeArray,
} from "./script.js";

// add
xit("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

//capitalize
xit("Capitalizes hello world", () => {
  expect(capitalize("hello world")).toEqual("Hello world");
});
xit("Capitalizes any string", () => {
  expect(capitalize("any string")).toEqual("Any string");
});
xit("Capitalizes no MATTER whAT", () => {
  expect(capitalize("no MATTER whAT")).toEqual("No matter what");
});

//string reversal
xit("Reverses a string", () => {
  expect(reverse("string")).toEqual("gnirts");
});
xit("Reverses a string", () => {
  expect(reverse("hello world")).toEqual("dlrow olleh");
});

// calculator
xit("Adds two numbers", () => {
  const c = new Calculator(2, 3);
  expect(c.add()).toBe(5);
});
xit("Adds some other two numbers", () => {
  const c = new Calculator(3, 3);
  expect(c.add()).toBe(6);
});

xit("Subtracts two numbers", () => {
  const c = new Calculator(5, 3);
  expect(c.subtract()).toBe(2);
});

xit("Subtracts some other two numbers", () => {
  const c = new Calculator(6, 3);
  expect(c.subtract()).toBe(3);
});

xit("Subtract any integer some other two numbers", () => {
  const c = new Calculator(3, 6);
  expect(c.subtract()).toBe(-3);
});
xit("Multiplies two numbers", () => {
  const c = new Calculator(3, 6);
  expect(c.multiply()).toBe(18);
});
xit("Multiplies some other two numbers", () => {
  const c = new Calculator(3, 5);
  expect(c.multiply()).toBe(15);
});
xit("Multiplies any two integer numbers", () => {
  const c = new Calculator(-3, 6);
  expect(c.multiply()).toBe(-18);
});
xit("Divides two numbers", () => {
  const c = new Calculator(6, 2);
  expect(c.divide()).toBe(3);
});
xit("Divides two other numbers", () => {
  const c = new Calculator(8, 2);
  expect(c.divide()).toBe(4);
});
xit("Divides any integer numbers", () => {
  const c = new Calculator(7, 2);
  expect(c.divide()).toBe(3.5);
});

// ceasarCipher
xit("Shifts chars in a string by 2", () => {
  expect(ceasarCipher("abc", 2)).toEqual("cde");
});
xit("Shifts more chars in a string by 2", () => {
  expect(ceasarCipher("cde", 2)).toEqual("efg");
});
xit("They wrap back and start from a", () => {
  expect(ceasarCipher("xyz", 3)).toEqual("abc");
});
xit("Shift is case sensitive", () => {
  expect(ceasarCipher("xYz", 3)).toEqual("aBc");
});
xit("Shift ignores punctuation", () => {
  expect(ceasarCipher("xYz!", 3)).toEqual("aBc!");
});
xit("Shift ignores white spaces", () => {
  expect(ceasarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});

// analyzeArray
it("Calculates the average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
it("Calculates the average", () => {
  expect(analyzeArray([2, 16, 6, 8, 4, 12]).average).toBe(8);
});
it("Finds the min number in the array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
it("Finds the min number in the array", () => {
  expect(analyzeArray([2, 16, 6, 8, 4, 12]).min).toBe(2);
});
it("Finds the max number in the array", () => {
  expect(analyzeArray([2, 16, 6, 8, 4, 12]).max).toBe(16);
});
it("Finds the max number in the array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
it("Finds the length of the array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
it("Finds the length of the array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6, 10]).length).toBe(7);
});

it("Return an object with the analysis data", () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});
it("Return an object with the analysis data of any int array", () => {
  const object = {
    average: 8,
    min: 2,
    max: 16,
    length: 6,
  };
  expect(analyzeArray([2, 16, 6, 8, 4, 12])).toEqual(object);
});
