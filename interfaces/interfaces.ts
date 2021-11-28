/**
 * Long Annotations are exhausting!
 * 
 * SEMI COLON TO SEPARATE THE TYPES, NOT COMMA!!!!!!!!
 * const printVehicle = (vehicle: {name: string; year: Date; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken? ${vehicle.broken}`)
}
 * 
 * 
 * What if `oldCivic` had 10 key/value pairs? 
 * We'd have to annotate each one.
 * 
 * What if we had 10 functions that had `oldCivic` as a parameter?
 * We'd have to repeat the annotation for each of those functions
 */
 
// Before we added the `summary` method to the Vehicle interface
// our `printVehicle` function needed access to `name`, `year`, and
// `broken` properties. This meant those properties needed to be defined
// in the interface also, so our interface looked like this:
// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary():string;
// }

// and our function looked like this:
// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(`Name: ${vehicle.name}
//     Year: ${vehicle.year}
//     Broken? ${vehicle.broken}`)
// }

// once we added the `summary` method, we changed `printVehicle` up
// this change allowed us to change our interface also:
// interface Vehicle {
//     summary():string;
// }
// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(vehicle.summary())
// }
// printVehicle(oldCivic)

// to make this code even better, it actually makes more sense to 
// rename the interface, as it is no longer really describing a vehicle
// we also redefined the parameter as `item`, and the function as 
// `printSummary`


const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`
    }
}

interface Summary {
    summary():string;
}
const printSummary = (item: Summary): void => {
    console.log(item.summary())
}
printSummary(oldCivic)

/**
 * We can resuse interfaces, because the below `drink` object has
 * a summary method, we can feed it to `printSummary`
 */


const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `This drink has ${this.sugar} grams of sugar.`
    }
}

printSummary(drink)