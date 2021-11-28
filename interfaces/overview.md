# Interfaces

## Define it

An interface creates anew type, describing the property names and values of an object

An interface must be satisfied, but it is not exhaustive. Suppose an object defined by an interface called `Vehicle` which includes only a function called `summary`, and a function called `printVehicle` that defines its parameter as the type of Vehicle. Then imagine we have an object called `oldCivic` with the properties of `name`, `year`, and `broken`, (all properly typed, of course) and a method called `summary`. We would be able to pass `oldCivic` to `printVehicle` and the constraints laid out by the `Vehicle` interface would be met. We would not see an error because `oldCivic` includes properties in surplus of what the interface demands.

Having said all of that, just because you can doesn't mean you should. It would be better to name the interface differently. The interface we have been calling `Vehicle` doesn't really describe a vehicle, which has the additional properties.
