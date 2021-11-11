Type annotations and Type Inference are two different systems inside of TS
They apply differntly to variables, functions, and objects

## Annotations (we define)

Code we add to tell ts what type of value a variable will refer to

## Inference (ts defines)

ts tries to figure out what type of value a variable refers to

- If declaration and inititialization are on the same line (in a single expression), ts will infer the type

```js
// type will be inferred
let apples = 5;

// type will not be inferred
let bananas;
bananas = 5;
```

### When to annotate

- When we declare a variable on one line then intitialize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the `any` type and we need to clarify the value
