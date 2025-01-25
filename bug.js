function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This will cause unexpected behavior if a or b are not numbers
  }
  return a / b;
}