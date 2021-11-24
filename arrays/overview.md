# Define it

Typed Arrays are essentially a plain js array where each element is some consistent type of value.

When an array is typed, they are restricted to the type we have defined

## Why?

- TS can do type infernece when extracting values from an array
- TS can prevent us from adding incompatible values to the array
- We can get help with `map`, `forEach`, `reduce`
- Flexible - arrays can still contain multiple different types

## When?

- Any time we need to represent a collection of records with some arbitrary sort order
