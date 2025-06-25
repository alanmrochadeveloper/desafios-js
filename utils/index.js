function test (inputOutputExpectation, fn) {
  for(let input in inputOutputExpectation) {
    const output = fn(input);
    const expectOutput = inputOutputExpectation[input]
    const isSuccess = output === expectOutput;
    console.log(`input = ${input}, output = ${output}, expected output = ${expectOutput}, success = ${isSuccess} !!!`);
  }
}
