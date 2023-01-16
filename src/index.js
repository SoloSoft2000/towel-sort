
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }
  newMatrix = [];
  matrix.forEach((item, idx) => {newMatrix =  newMatrix.concat(idx%2 ? item.reverse() : item)});
  return newMatrix;
}
