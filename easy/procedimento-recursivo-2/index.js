import { test, withPerfBenchMark } from "./utils.js"

function getFactorial(n) {
  if(!BigInt(n) || BigInt(n) <= 1) return 1n;
  return  BigInt(BigInt(n) * BigInt(getFactorial(n -1)))
}

const expectationObj = {
  5: 120n,
  0: 1n,
  9n: 362880n
}

test(expectationObj, withPerfBenchMark(getFactorial))

