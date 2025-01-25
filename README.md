# Unexpected behavior in division function when non-numeric values are passed.

This repository contains a JavaScript function that demonstrates an uncommon error caused by passing non-numeric values as arguments.  The function is intended to perform division but does not handle the case of non-numeric input appropriately, resulting in unexpected behavior or errors.  The solution provided addresses this issue by explicitly handling non-numeric input.

## Bug

The original `foo` function returns `0` if either input is `0`, however it doesn't check if the inputs are numeric. This is a problem because if a or b are non-numeric values (strings, booleans, etc), the function can return unexpected results or throw errors.