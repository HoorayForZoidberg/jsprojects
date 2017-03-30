function sumOfSquares(n){
	return (1/3) * Math.pow(n, 3) + (1/2) * Math.pow(n,2) + (1/6) * n;
}

function squareOfSums(n){
	return Math.pow((n * (n + 1) / 2), 2);
}

function sumSquareDifference(n){
	return squareOfSums(n) - sumOfSquares(n);
}

sumSquareDifference(100)



var count = 10000;
var averageTimes = [];
var result = 0;
while (count > 0){
	var t0 = performance.now();
	var result = sumSquareDifference(100);
	var t1 = performance.now();
	averageTimes.push(Number(t1-t0));
	count--;
}
var validArray = averageTimes.slice(1)
var averageTime = validArray.reduce(function(curr, acc){ return curr + acc; }) / (averageTimes.length-1)
console.log('Returned '+result+' in '+averageTime.toPrecision(4)+' milliseconds')