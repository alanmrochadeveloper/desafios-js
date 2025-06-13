let objPerformance = {};


const getPerformanceComparison = (twoKeysToComp) => {
  if(!twoKeysToComp?.length || twoKeysToComp.length != 2) 
    throw new Error("The comparison array should only have two keys");

  const table = Object.entries(objPerformance)
  console.table(table.map(([key, value]) => Object( value[key] )), table.map(([key,value]) => value))
  for(row of table) {
    console.log("row[0] = ",row[0], "row[1] = ", row[1])
    // console.table(row[0], row[1])
  }
  console.log({table})
    
  
 return objPerformance
  
}

const savePerformanceComparison = (funcKey, inputKey, perfNumber) =>
  objPerformance[funcKey] = {...objPerformance[funcKey],[inputKey]: perfNumber};

const getCharCode = (letter) => letter.charCodeAt();

function getHighestLetter(s){
  const start = performance.now()
  if(!s) return ""
  s = s.toLowerCase();
  let highestLetterIndex = 0;
  for (let i = 0; i < s.length; i++) {
    highestLetterIndex = 
      getCharCode(s[i].toLowerCase()) > getCharCode(s[highestLetterIndex].toLowerCase())
      ? i 
      : highestLetterIndex
  }
  const end = performance.now();
  const perf = end - start;
  console.log("getHighestLetter",{perf})
  savePerformanceComparison("getHighestLetter", s, perf )
  return s[highestLetterIndex];
}

function getHighestLetterTutorSolution( str) {
  const start = performance.now();
  const lowerCaseString = str.toLowerCase();
  
  const orderedStringLettersArr = lowerCaseString.split('').sort((a,b) =>a.localeCompare() - b.localeCompare())

  const end = performance.now();
  const perf = end - start;
  console.log("getHighestLetter",{perf})
  savePerformanceComparison("getHighestLetterTutorSolution", str.toLowerCase(), perf )
  return orderedStringLettersArr[orderedStringLettersArr.length - 1]
  // return orderedStringLettersArr.at(-1)

}

console.log(getHighestLetter("Lorem ipsum dolore sec avanti")) // v
console.log(getHighestLetter("Hello")) // o
console.log(getHighestLetter("May the force be with you")) // y
console.log(getHighestLetter("Its over nine thousand")) // v
console.log(getHighestLetter(`Asjdl ajlsdf jaskldfj laksdjfl kjasdlk as jflkasdjfkljasdkl
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
  lasdkfj lkjasd`))


console.log(getHighestLetterTutorSolution("Lorem ipsum dolore sec avanti")) // v
console.log(getHighestLetterTutorSolution("Hello")) // o
console.log(getHighestLetterTutorSolution("May the force be with you")) // y
console.log(getHighestLetterTutorSolution("Its over nine thousand")) // v
console.log(getHighestLetterTutorSolution(`Asjdl ajlsdf jaskldfj laksdjfl kjasdlk as jflkasdjfkljasdkl
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
   jaskl;fj klasdj l;kasd jasdklf asdfj lasdjf
  lasdkfj lkjasd`))

// console.log(getPerformanceComparison(["getHighestLetter","getHighestLetterTutorSolution"]))
