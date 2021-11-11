/**
 * the `:<type>` is the annotation
 * for these examples, we didn't have to add the annotations,
 * ts would have inferred them
 */

const apples: number = 5;

// can only assign a number to `apples` now
// works with let also, if the snippet was
// let apples: number = 5 then we would get an error on
// apples = "can't change me"

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// Arrays

let colors: string[] = ["red", "green", "false"];
let nums: number[] = [1, 3, 4];
let bools: boolean[] = [true, false, false];

// Classes

class Car {}

let car: Car = new Car();

// Object literal (note the semi colon in the type annotation)

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

// we use `void` because this functions doesn't return anything
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
