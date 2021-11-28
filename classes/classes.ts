/**
 * ts has some additions to the way it handles classes
 * 
 * Modifiers:
 *  public - can be called anywhere, anytime - default
 *  private - can only be called by `other methods` in `this` class
 *  protected - can be called by other methods in `this` class OR other methods in child classes
 * 
 * Some notes:
 * - when overriding a method in a child class, we cannot change the modifier
 *   the parent class assigned that method
 */

class Vehichle {

    public honk():void {
        console.log("beep beep")
    }
}

class Car extends Vehichle {
    private drive(): void {
        console.log("car goes vroom vroom")
    }

    startDrivingProccess(): void {
        return this.drive()
    }
}

const car = new Car();

// uncomment to see the error
// car.drive();
car.startDrivingProccess()
car.honk();

