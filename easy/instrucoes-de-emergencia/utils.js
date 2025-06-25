
export function test (inputOutputExpectation, fn) {
  console.info("test: function name =",fn.displayName || fn.name)
  for(let input in inputOutputExpectation) {
    const output = fn(input);
    const expectOutput = inputOutputExpectation[input]
    const isSuccess = output === expectOutput;
    console.log(`input = ${input}, output = ${output}, expected output = ${expectOutput}, success = ${isSuccess} !!!\n`);
  }
}

export function withPerfBenchMark (fn) {
  console.info("performance: function name =", fn.name);
  function withPerf (args) {
    const start = performance.now();
    const returnValue = fn(args);
    const end = performance.now();
    console.log(`the function ${fn.name} took ${end - start} milleseconds`);
    return returnValue;
  }
  withPerf.displayName = "withPerfomance"+fn.name[0].toUpperCase()+fn.name.slice(1);
  return withPerf
}
