/*
Types:

Easy way to refer to the different properties and functions that a value has.

Two Categories of Types:

Primitive
1. number
2. boolean
3. string
4. void
5. undefined
6. symbol
7. null

Object
1. functions
2. arrays
3. classes
4. objects
    types created by an interface

Types are used by the TS compiler to anaylze our code for errors
defining types also informs other engineers
*/

const today = new Date();

// ts autocompletes which properties are availale for
// a date object and will error on a property that
// doesn't exist
today.getMonth();
// today.push()

// even though we haven't defined a type with this
// object, TS will throw an error if we try to
// access a property that doesn't exist, for ex:
// person.name
const person = {
  age: 20,
};

// this auto complete behavior and error throwing extends to Classes as well
