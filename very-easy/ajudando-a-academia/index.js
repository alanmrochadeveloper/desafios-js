// desafio finalizado com sucesso e passando nos testes sugeridos
function calcularMedia(...num) {
  if (num.length <= 0) return 0;
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum / num.length;
}

function calcularMedia2(...num) {
  if (num.length <= 0) return 0;
  return num?.reduce((acc, curr) => acc + curr, 0) / num.length;
}

const entrada1 = [10, 9, 6, 8, 9, 1, 5, 7];
const entrada2 = [2, 5, 7, 1, -2];
const entrada3 = [10, 10, 10, 10, 9];
const entrada4 = [25, 75];

console.log(calcularMedia(...entrada1), calcularMedia2(...entrada1));
console.log(calcularMedia(...entrada2), calcularMedia2(...entrada2));
console.log(calcularMedia(...entrada3), calcularMedia2(...entrada3));
console.log(calcularMedia(...entrada4), calcularMedia2(...entrada4));
