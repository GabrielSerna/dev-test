module.exports = function average (...nums) {
  return nums.reduce ( ( actual, value ) => actual + value )/nums.length;
};