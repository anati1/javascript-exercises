const ftoc = function(ftemp) {
  let ctemp = ((ftemp - 32)*(5.0/9.0));
  if (Number.isInteger(ctemp))
      return ctemp;
  else
     return parseFloat(ctemp.toFixed(1));
};

const ctof = function(ctemp) {
  ftemp = (ctemp*(9.0/5.0)) + 32;
  if (Number.isInteger(ftemp))
      return ftemp;
  else
     return parseFloat(ftemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
