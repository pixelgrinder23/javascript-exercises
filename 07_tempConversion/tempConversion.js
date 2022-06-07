const ftoc = function(tempIn) {
  let cel = ((tempIn - 32) * (5/9));
  let result = (cel === 0) ? cel : cel.toFixed(1);
  return parseFloat(result);
};

const ctof = function(tempIn) {
  let far = ((tempIn * (9/5)) + 32);
  let result = (far === 0) ? far : far.toFixed(1);
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
 