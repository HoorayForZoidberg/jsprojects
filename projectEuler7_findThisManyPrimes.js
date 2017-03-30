function findThisManyPrimes(n){
  var arrayOfPrimes = [2,3];
  var pass = true;
  var i = 3;
  while (arrayOfPrimes.length < n){
    for (var j = 1; j < arrayOfPrimes.length; j++){
      if(i % arrayOfPrimes[j] === 0){
        pass = false;
        break;
      }
    }
    (pass === true) ? arrayOfPrimes.push(i) : pass = true;
    i += 2;
  }
  return arrayOfPrimes;
}

findThisManyPrimes(10001).pop();

var count = 10000;
var averageTimes = [];
var result = 0;
while (count > 0){
	var t0 = performance.now();
	var result = findThisManyPrimes(10001).pop();
	var t1 = performance.now();
	averageTimes.push(Number(t1-t0));
	count--;
}
var validArray = averageTimes.slice(1);
var averageTime = validArray.reduce(function(curr, acc){ return curr + acc; }) / (averageTimes.length-1);
console.log('Returned '+result+' in '+averageTime.toPrecision(4)+' milliseconds')