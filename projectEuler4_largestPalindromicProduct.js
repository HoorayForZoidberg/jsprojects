function largestPalindromicProduct(n){
  var largestPalindromicProduct = 0;
  for (var i = Math.pow(10, n) - 1; i >= Math.pow(10, n-1); i--){
    for (j = i; j >= Math.pow(10, n-1); j--){
      var product = i * j;
      if (product > largestPalindromicProduct){
        var reversedProduct = Number(product.toString().split('').reverse().join(''));
        if (product === reversedProduct){
          largestPalindromicProduct = product;
        }
      }
    }
  }
  return largestPalindromicProduct;
}