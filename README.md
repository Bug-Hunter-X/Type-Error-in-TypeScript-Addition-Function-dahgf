# Type Error in TypeScript Addition Function

This repository demonstrates a common type error in TypeScript that can be easily overlooked. The `add` function is designed to add two numbers, but the code attempts to add a number and a string, which results in a type error.

## The Bug

The bug lies in the function call:
```typescript
let result = add(1, "2");
```

The function `add` is defined to accept two numbers as arguments, while it receives a number and a string.  TypeScript's type checker catches this mismatch and throws an error during compilation, preventing runtime errors.