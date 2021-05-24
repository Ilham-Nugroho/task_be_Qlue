function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function arrayOfPrimes(n) {
  var array = [2];
  for (var i = 3; i < n; i++) {
    if (isPrime(i)) {
      array.push(i);
    }
  }
  return array;
}

console.log(arrayOfPrimes(20));
