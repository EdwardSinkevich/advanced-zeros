module.exports = function getZerosCount(number, base) {
  let primeNum = 2;
  let primeCount;
  let countersArr = [];
  let zeroCount = 0;
  for (; primeNum <= base; primeNum++) {
    if (base % primeNum === 0) {
      primeCount = 0;
      zeroCount = 0;
      while (base % primeNum === 0) {
        base = base / primeNum;
        primeCount++;
      }
      let multiplier = primeNum;
      while (multiplier < number) {
        zeroCount = zeroCount + Math.floor(number / multiplier);
        multiplier = multiplier * primeNum;
      }
      countersArr.push(Math.floor(zeroCount/primeCount));
    }  
  }
  return (Math.min.apply(Math, countersArr));
}