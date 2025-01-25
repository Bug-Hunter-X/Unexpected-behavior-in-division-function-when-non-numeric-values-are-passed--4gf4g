function foo(a, b) {
  // Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN if inputs are not numbers
  }
  if (a === 0 || b === 0) { 
    return 0; //This will cause unexpected behavior if a or b are not numbers
  }
  return a / b;
}