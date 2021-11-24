// TS will try to infer the type
const carMakers = ['ford', 'toyta', 'chevy']
const dates = [new Date(), new Date(), new Date()]

//if we are initializing an empty array, we want to annotate
const emptyArr: string[] = []

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// if we wanted to annotate the above array it would look like this:
const annotatedCarsByMake: string[][] = []

// Help with inference when extracting values
// TS knows that these variables contains a string value
const car = carMakers[0];
const myCar = carMakers.pop();


// TS can prevent us from adding incompatible values to the array
// this will error:
// carMakers.push(100)

// Help with methods (and auto complete on values):
carMakers.map((car: string): string => {
    return car.toUpperCase()
})

// Flexible types
// inferred
const importantDates = [new Date, "2030-10-10"]
// annotated
const annotatedImportantDates: (string | Date)[] = []