// as an object
/**
 * Why would we use a tuple? I asked Twitter and this is what Dan Abramov and Mark Erikson had to say:
 * 
 * Dan:
 * Tuples are convenient when want to just “return two things” and don’t want to give them explicit names
 * (or want to make it very easy for the caller to choose names).
 * React useState is an example of that — useState returns a tuple, and you get to name it:
 *  [count, setCount] = ...
 * React uses tuples because it’s convenient to give them different names if calling more than once:
 *  let [count, setCount] = ...
 *  let [name, setName] = ...
 * whereas with an object you’d have to
 *  let {state: count, setState: setCount} = ...
 *  let {state: name, setState: setName} = ...
 * The downside of tuples is you have to remember what each individual item *means*.
 * For things like useState it’s easy to remember because you get used to it.
 * A rule of thumb is that if you can’t guess meaning from each item’s type, or recall the exact order, don’t use a tuple.
 * 
 * Mark:
 * And in TS terms specifically, they represent "an array-like thing with _exactly_
 * this number of items that are _exactly_ these types in order",as opposed to
 * "an array of unknown size that contains any of these things at any index"
 * 
 * For example, "the type of all the parameters of this function" would be a tuple, because a function has a known set of arguments:
 *  let func1 = (a: number, b: string, c: MyObj) => boolean
 *  type p1 = Parameters(typeof func1>
 * // [number, string, MyObj]
 * 3-item tuple, in order
 * 
 * Alec Perkins chimed in with another good use case:
 * Another similar use case is findOrCreate methods that ORMs like Sequelize provide.
 * They return [instance: Thing, wasCreated: boolean], and use the tuple to avoid needing to name the instance variable,
 * which is best named by the user.
 */

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// as a tuple
const tupleDrink: [string, boolean, number] = ['brown', true, 40]

// as a type alias
type Drink = [string, boolean, number]

const typeAliasTuple: Drink = ['brown', true, 40]
