function reverseList(...collection) {
  if (collection == null) return [];
  const base = collection.length - 1;
  const reversedArray = [];
  for (let i = 0; i <= base; i++) {
    reversedArray[i] = collection[base - i];
  }
  return reversedArray;
}

console.log(reverseList(1, 2, 3));
console.log(reverseList(1, 2, 3, 4, 5, 6));
console.log(reverseList("teste1", "teste2", "teste3"));
