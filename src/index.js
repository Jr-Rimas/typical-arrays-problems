
exports.min = function min (array) {
  return (array === undefined || array[0] === undefined)? 0: Math.min(...array);
}

exports.max = function max (array) {
  return (array === undefined || array[0] === undefined)? 0: Math.max(...array);
}

exports.avg = function avg (array) {
  return (array === undefined || array[0] === undefined)? 0: array.reduce((acc, i) => acc + i) / array.length;
}
