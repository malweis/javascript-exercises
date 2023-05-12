const convertToCelsius = function(temp) {
  let decimalC = (temp - 32) * 5/9;
  return parseFloat(decimalC.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let decimalF = (temp * 9/5) + 32;
  return parseFloat(decimalF.toFixed(1));
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
