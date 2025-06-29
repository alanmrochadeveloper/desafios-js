function validaCodigoIdentificador(_cod) {
  const cod = String(_cod);
  if(String(cod).length !== 12) return false;
  let sum = 0;
  for(let i =0; i < cod.length - 1; i++) {
    if(i % 2 === 0) {
      sum+= Number(cod[i]) * 3;
    } else {
      sum+=Number(cod[i]);
    }
  }
  
  return sum % 10 === 0 ? Number(cod.at(-1)) === 0: Number(cod.at(-1)) === 10 - sum % 10;
}

// below the author approach

function generateDigit(arr) {
  const step1 = arr.reduce((acc, curr, index) => {
    return index === 0 || index % 2 === 0 ? acc + curr : acc;
  }, 0)
  const step2 = step1 * 3;
  const step3 = step2 + arr.reduce((acc, curr, index) => {
    return index % 2 !== 0 ? acc +curr : acc;
  }, 0)

  return step3 % 10 !== 0 ? 10 - step3 % 10: 0
}

function verifyCode (code) {
  const numberArray =  code.toString().split('').map(Number);

  const numberArrayWithoutDigit = numberArray.slice(0, -1);

  const correctDigit = generateDigit(numberArrayWithoutDigit);

  return correctDigit === numberArray[numberArray.length -1];
}
// ends authors approach


console.log(validaCodigoIdentificador(547020743789))
console.log(validaCodigoIdentificador(301354030348))
console.log(validaCodigoIdentificador(301354030349))
console.log(validaCodigoIdentificador(123456789872))


console.log(verifyCode(547020743789))
console.log(verifyCode(301354030348))
console.log(verifyCode(301354030349))
console.log(verifyCode(123456789872))


