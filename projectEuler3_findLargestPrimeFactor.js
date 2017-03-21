// find largest prime factor of (x)

function primeFactors(n){
  var factors = [];
  var i = 2;
  while ((n > 1) && (i*i =< n)){
    if (n % i === 0){
      factors.push(i);
      n /= i;
    } else {
      i++;
    }
  }
  (n > 1) ? factors.push(n) : null;
  return factors;
}

function largestPrimeFactor(n){
  return primeFactors(n).pop();
}