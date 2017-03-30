function findPrimes(n){
  // find all prime numbers up to n
  var primeArray = [2,3]
  var i = 1
  while (6 * i + 1 <= n) {
    isPrime(6*i-1) ? primeArray.push(6*i-1) : null;
    isPrime(6*i+1) ? primeArray.push(6*i+1) : null;
    i++;
  }
  return primeArray;
}

function isPrime(n){
  //checks if n is prime
  if (n % 2 === 0 || n % 3 === 0){
    return false;
  } else {
    var pass = true;
    for (var i = 5; i*i <= n; i += 2) {
      n % i === 0 ? pass = false : null;
    }
    return pass;
  }
}

function sumAllPrimes(n){
  var primes = findPrimes(n);
  return primes.reduce((x,y) => x + y)
}


var count = 10;
var averageTimes = [];
var result = 0;
while (count > 0){
	var t0 = performance.now();
	var result = sumAllPrimes(2000000);
	var t1 = performance.now();
	averageTimes.push(Number(t1-t0));
	count--;
}
var validArray = averageTimes.slice(1);
var averageTime = validArray.reduce(function(curr, acc){ return curr + acc; }) / (averageTimes.length-1);
console.log('Returned '+result+' in '+averageTime.toPrecision(4)+' milliseconds')