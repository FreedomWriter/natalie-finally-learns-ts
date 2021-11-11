/**
 * in this example, we did not annotate, the function, we annotated
 * the variable `logNumber`, we were telling ts that we are assigning
 * value to a variable that will have the type number
 * const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
  };
 * When we annotate a function we are telling ts:
    what type of arguments a function will receive and
    what type of valies it will return
 * ts will try to infer for functions byt it will only try to figure
    out what type of value a function will return

 * there is no type inference for arguments
 * type inference works out output, but we will be annotating, so as
    to be sure we are returning the correct value type
 * 

*/
// annotate the args: (num1: number, num2: number)
// annotate the return value: (...args): number
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (num1: number, num2: number): number {
  return num1 * num2;
};
