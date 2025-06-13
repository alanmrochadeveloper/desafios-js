function multiArraysToOneSingleSortedArray (bidimetionalArray = []) {
  if(bidimetionalArray == null || !bidimetionalArray.length) []
  return bidimetionalArray.flat(1).sort((a,b) => a - b)
}

// Teacher approach
function flatAndSort (biArray) {
  const numbers = [];
  biArray.forEach(list => {
    numbers.push(...list);
  })
  return numbers.sort((a,b) => a-b)
}

const input1 = [[2,3], [5,2,3]] //2,2,3,3,5

const input2 = [[12, 35, 1], [3, 7], [5, 2]] // 1, 2, 3, 5, 7, 12, 35

const output1 = multiArraysToOneSingleSortedArray(input1)
const output2 = multiArraysToOneSingleSortedArray(input2)

const output1Teacher = flatAndSort(input1)
const output2Teacher = flatAndSort(input2)
console.log({output1, output2})
console.log({output1Teacher, output2Teacher})
