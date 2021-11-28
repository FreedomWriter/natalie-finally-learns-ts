/**
 * ts has some additions to the way it handles classes
 * 

 */

class Vehichle {

    // color: string
    // constructor(color: string) {
    //     this.color = color || "red";
    // }
    // shorthand of above:
    // we could also declare it `private` or `protected`, but the rules
    // of those modifiers would then apply, regarding access
    constructor(public color: string) {}

    protected honk():void {
        console.log("beep beep")
    }
}

class Car extends Vehichle {
    // we don't modify color (with `public`, `private`, or `protected`)
    // because we aren't reassigning, or creating a new field, `color`
    // belongs to vehicle
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log("car goes vroom vroom")
    }

    startDrivingProccess(): void {
        this.drive()
        this.honk()
    }
}

const car = new Car(4, 'creamsicle orange');
car.startDrivingProccess()
console.log(car)

// uncomment to see the error (because `drive` is `private`)
// car.drive();
// uncomment to see the error (because `honk` is `protected`)
// car.honk();

const vehicle = new Vehichle('champagne papi')
console.log(vehicle.color)