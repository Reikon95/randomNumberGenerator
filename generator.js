function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(3, 12);

console.log(myRandom);
