var letterValues = {
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15,
}

var getHexValue = function(string) {
  if(letterValues[string] !== undefined) {
    return letterValues[string];
  } else {
    return parseInt(string, 10);
  }
}

var hexToDecimal = function(hex) {
  var placeValues = [];
  for(var i = 1; i <= hex.length; i++) {
    placeValues.push(getHexValue(hex[hex.length - i]) * Math.pow(16, i - 1))
  }
  var total = placeValues.reduce(function(total, each){
    return total + each;
  }, 0 );
  return total;
}

console.log(hexToDecimal('9')) // 9
console.log(hexToDecimal('E')) // 15
console.log(hexToDecimal('5A')) // 90
console.log(hexToDecimal('CC')) //204
