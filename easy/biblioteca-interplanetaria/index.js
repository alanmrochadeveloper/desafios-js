function convertAuthorFullName (fullName) {
  if(!fullName) return "";
  if(!fullName.includes(" ")) return fullName;
  const arrayNames = fullName.split(" ");
  const lastName = arrayNames.pop();
  let initialLetters = ""
  for(let name of arrayNames) {
    initialLetters+= name[0]+". "
  }
  const resolvedName = lastName+", "+initialLetters;
  return resolvedName.trim().toUpperCase()
}

function convertAuthorFullNameV2 (fullName) {
  if(!fullName) return "";
  if(!fullName.includes(" ")) return fullName;
  return fullName
  .split(" ")
  .at(-1)
  .toUpperCase()
  + ", " +fullName
  .split(" ")
  .slice(0, fullName.split(" ").length - 1)
  .map(item => item[0])
  .join(". ")
  .toUpperCase()
  .trim()+".";
}

const inputs = [
  "Isaac Larrubia Ferreira Pontes", 
  "John Ronald Reuel Tolkien",
  "christopher james paolini",
  "Suzanne Marie Collins"
]

const expectedOutputByInputKeys = {
    [inputs[0]]: "PONTES, I. L. F.",
    [inputs[1]]: "TOLKIEN, J. R. R.",
    [inputs[2]]: "PAOLINI, C. J.",
    [inputs[3]]: "COLLINS, S. M."
}

for(let input of inputs) {
  const output = convertAuthorFullName(input);
  const expectOutput = expectedOutputByInputKeys[input]
  const isSuccess = output === expectOutput;
  console.log(`input = ${input}, output = ${output}, expected output = ${expectOutput}, success = ${isSuccess}!!!`);
}
