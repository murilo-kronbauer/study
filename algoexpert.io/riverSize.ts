// 0 = Land
// 1 = River
// Return an array with the size of the rivers, the rivers consist of zeros adjacents in the matrix (not diagonally adjacent).

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

// expected output: [2, 2, 5, 1, 2] (the order here doesn't matter);

export function riverSizes(matrix: number[][]) {
  return [-1];
}
