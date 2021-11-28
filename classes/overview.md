# Classes

## Define it

A class is a `blueprint` to create an object with different values and methods to represent something

## TS Class extras

Modifiers:

    - public - can be called anywhere, anytime - default
    - private - can only be called by `other methods` in `this` class
        - defining a method as private is not a security measure, it offers no protection, however it does restrict the methods that other developers can call
    - protected - can be called by other methods in `this` class OR other methods in child classes (like private, but child classes can access as well)

Some notes:

- when overriding a method in a child class, we cannot change the modifier
  the parent class assigned that method
