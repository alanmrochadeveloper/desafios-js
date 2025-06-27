function intervaloDeCoord (x,y) {
  if(x < 0 || y < 0) return []
  const prevOrEqualCoords = []
  for(let i = 0; i <= x; i++) {
    for(let j = 0; j <= y; j++) {
      prevOrEqualCoords.push([i,j]);
    }
  }
  return prevOrEqualCoords;
} 

console.log("[2,2] =", intervaloDeCoord(2,2)  )
console.log("[2,7] =", intervaloDeCoord(2,7)  )
console.log("[-3, -3] =", intervaloDeCoord(-3,-3)  )
console.log("[7,6] =", intervaloDeCoord(7,6)  )
