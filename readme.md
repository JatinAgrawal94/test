New learning:

We can use && operator in js for comparison between boolean and non-boolean values.
For example:

true && "Hi this is a test repo"
Sol: Above statement would give a trur result as js engine considers non-empty string as true in boolean value and a empty string as false in boolean value.

Here the result is the last operand in case of non-boolean comparisons.
Eg: true && "Hi" && 1
Sol: here result is 1.

All web browsers operate in strict mode by default.
1) We cannot use variable which are not declared using keywords like let,var or const.
2) We cannot refer to global object using this keyword inside a function.

Call function (function currying)
Apply function (functon borrowing)
bind function (function binding)

closure
scope and scope chain features in javascript.

debugconsole output problems
Javascript has 3 kinds of scope:
1) Block Scope (code who has scope within the blocks or braces.) (keyword let has a block scope,keyword var doesnot have a block scope)
2) Function Scope (variable declared within a js function using var,let, or const act same in case of fucnion )
3) Global Scope
