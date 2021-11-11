/**
 * Delayed Initialization:
 *  When we declare a variable on one line then intitialize it later
 */

let words = ["red", "green", "blue"];
// if we didn't annotate, ts would consider `foundWord`'s type as `any`
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
