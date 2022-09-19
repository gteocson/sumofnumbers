function sumFor(numArray) {
  let total = 0;
  for (let i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }

  return total;
}

function sumWhile(numArray) {
  let total = 0;
  let i = 0;
  while (i < numArray.length) {
    total += numArray[i];
    i++;
  }
  return total;
}

function sumRecursion(numArray, ind) {
  if (ind <= 0) {
    return 0;
  }
  return (sumRecursion(numArray, ind - 1) + numArray[ind - 1]);
}

function sumTheSimpleWay(numArray) {
  return _.reduce(numArray, function(memo, num){ return memo + num; }, 0);
}

let numArray = [1, 2, 3];
let ind = numArray.length;

console.log(sumFor(numArray));
console.log(sumWhile(numArray));
//.log(sumRecursion(numArray), ind);
console.log(sumTheSimpleWay(numArray));
