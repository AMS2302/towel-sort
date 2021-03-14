
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (Array.isArray(matrix) && matrix.length > 0) {
    let a;
    let arr = [];

    for (a = 0; a < matrix.length; a++) {
      if (a % 2 != 0) {
        matrix[a] = matrix[a].reverse();
      }
    }

    for (a = 0; a < matrix.length; a++) {
      arr = arr.concat(matrix[a]);

    }
    return arr;


  }
  else { return [] }
}

