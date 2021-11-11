let numbers = [-10, -1, 12];

// `numberAboveZero` might be a boolean or a number
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}