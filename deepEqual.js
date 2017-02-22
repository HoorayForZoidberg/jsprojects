function deepEqual(thing1, thing2){
  if(thing1 === thing2){
    return true;
  } else if (typeof thing1 === typeof thing2){
    var pass = true;
    for (var i in thing1){
      (deepEqual(thing1[i], thing2[i])) ? null : pass = false;
    }
    return pass;
  } else {
    return false;
  }
}

var arr1 = [1,2,3];
var arr2 = [1,2,3];
var a = 1;
var b = 1;
var str1 = 'string';
var str2 = 'string';
var obj1 = {
  key1: 'string',
  key2: 1,
  key3: [1,2,3],
  key4: undefined
};
var obj2 = {
  key1: 'string',
  key2: 1,
  key3: [1,2,3],
  key4: undefined
}

console.log(arr1 === arr2);
console.log(arr1 == arr2);
console.log(deepEqual(arr1, arr2));
console.log(a === b);
console.log(a == b);
console.log(deepEqual(a, b));
console.log(str1 === str2);
console.log(str1 == str2);
console.log(deepEqual(str1, str2));
console.log(obj1 === obj2);
console.log(obj1 == obj2);
console.log(deepEqual(obj1, obj2));