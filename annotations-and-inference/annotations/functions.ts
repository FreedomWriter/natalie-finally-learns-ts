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

// a function that has a return type of void can
// return null or undefined
const logger = (message: string): void => {
  console.log(message);
};

// `never` means that we are never going to reach the end of
// this function, we will exit the function early without
// returning any value
const throwErrror = (message: string): never => {
  throw new Error(message);
};

// we only annotate with `never` when we truly expect a function to
// never return anything AND we won't reach the end of the function
// if there is a possibilty of a return value,
// we annotate with that return values type

const couldReturnSomething = (message: string): string => {
    if (!message) {
        throw new Error('no message')
    }

    return message
}


// if there is a chance that we could reach the end of the fuction
// we annotate with `void`

const couldReachEndOfFunction = (message: string): void => {
    if (!message) {
        throw new Error('no message')
    }
}

// destructuring with annotations

const todaysWeather = {
    date: new Date(),
    weather: "too cold"
}
                    //destructuring     annotating
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(`On ${date}, the weather will be ${weather}`)
}

logWeather(todaysWeather)