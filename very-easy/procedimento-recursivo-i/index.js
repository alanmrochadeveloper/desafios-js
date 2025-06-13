function printChunk(n, initialValue) {
  if (!n) throw new Error("n entry not found!");
  if (!initialValue) throw new Error("Initial value entry not found!");
  if (n < 1) return "not-chunk-found";
  if (n === 1) return `${initialValue !== n ? "-" : ""}chunk`;
  return (
    `${initialValue !== n ? "-" : ""}chunk` + printChunk(n - 1, initialValue)
  );
}

function procedimentoRec1(num) {
  const initialValue = num;
  console.log(printChunk(num, initialValue));
}

procedimentoRec1(2);
