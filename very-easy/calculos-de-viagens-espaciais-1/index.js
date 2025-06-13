function squaredNumbers(nums) {
  const stringifiedNums = nums.toString();
  const arrayedNums = stringifiedNums.split("");
  // INFO: Both returns word keys works like a charm, just to show 2 different approaches
  return Number(arrayedNums.map((num) => num ** 2).join(""));
  // return Number(arrayedNums.map((num) => Math.pow(num, 2)).join(""));
}

console.log(squaredNumbers(3514));
console.log(squaredNumbers(94571));
console.log(squaredNumbers(24));
console.log(squaredNumbers(745821698));
