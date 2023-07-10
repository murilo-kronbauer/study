const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

export function isValidSubsequence(array: number[], sequence: number[]) {
  let counter = 0;
  for (let item of array) {
    if (counter === sequence.length) break;
    if (item == sequence[counter]) {
      counter++;
    }
  }
  return counter === sequence.length;
}

console.log(isValidSubsequence(array, sequence));
