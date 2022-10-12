New learning:

We can use && operator in js for comparison between boolean and non-boolean values.
For example:

true && "Hi this is a test repo"
Sol: Above statement would give a trur result as js engine considers non-empty string as true in boolean value and a empty string as false in boolean value.

Here the result is the last operand in case of non-boolean comparisons.
Eg: true && "Hi" && 1
Sol: here result is 1.