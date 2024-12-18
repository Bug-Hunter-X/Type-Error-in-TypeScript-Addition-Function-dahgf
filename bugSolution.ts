function add(a: number, b: number): number {
  return a + b;
}

let result1 = add(1, 2); // Correct: No error

// Handle potential string inputs using type guards or explicit type checking:
function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string') a = parseFloat(a);
  if (typeof b === 'string') b = parseFloat(b);
  if(isNaN(a) || isNaN(b)) return NaN; // Handle invalid input
  return a + b;
}

let result2 = addSafe(1, "2"); // Correct: No error, string is parsed into a number
let result3 = addSafe("1", "2"); // Correct: No error, strings are parsed
let result4 = addSafe("abc", 2); // Correct, NaN is returned because 'abc' cannot be converted to a number.