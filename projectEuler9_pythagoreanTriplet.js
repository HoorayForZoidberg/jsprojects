function pythagoreanTriplet(n){
  var resultArray = [];
  for (var a = 2; a < n; a++){
    for (var b = a+1; b < n; b++){
      for (var c = b+1; c < n; c++){
        if ((a + b + c === n) && (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2))){
          resultArray = [a,b,c];
          return resultArray.reduce((acc, curr) => acc * curr);
        }
      }
    }
  }
   
}

pythagoreanTriplet(1000)