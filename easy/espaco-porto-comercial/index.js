function moedasNecessarias (value) {
  if(!value) return;
  const coins = [1,5, 10, 25, 100, 500];
  const counterObj = {};
  for(let i = coins.length - 1; i >= 0; i--) {
    currentCoin = coins[i];
    counterObj[currentCoin] = 0;
    while(currentCoin <= value) {
      if(value === 0) break;
    currentCoin = coins[i];
      value = value - currentCoin;
      counterObj[currentCoin]+= 1;
    }
  }
  return counterObj;
}

function moedasNecessariasV2 (value) {
  if(!value) return;
  const coins = [1,5, 10, 25, 100, 500];
  const counterObj = {}
  for(let i = coins.length - 1; i >= 0; i--) {
    currentCoin = coins[i];
    counterObj[currentCoin] = 0;
    if(value >= currentCoin) {
      counterObj[currentCoin] = Math.floor(value / currentCoin);
      value = value % currentCoin;
    }
  }
  return counterObj
}

function authorVersion (num) {
  const coins = {
    '500': 0,
    '100': 0,
    '25': 0,
    '10': 0,
    '5': 0,
    '1': 0
  }
  let rest = num;
  coins['500'] = Math.floor(rest / 500);
  rest -= * Math.floor(rest/ 500);
  
  coins['100'] = Math.floor(rest / 100);
  rest -= * Math.floor(rest/ 100);
  
  coins['25'] = Math.floor(rest / 25);
  rest -= * Math.floor(rest/ 25);
  
  coins['10'] = Math.floor(rest / 10);
  rest -= * Math.floor(rest/ 10);
  
  coins['5'] = Math.floor(rest / 5);
  rest -= * Math.floor(rest/ 5);
  
  coins['1'] = Math.floor(rest / 1);
  rest -= * Math.floor(rest/ 1);
}


console.log(moedasNecessariasV2(478));
console.log(moedasNecessariasV2(384));
console.log(moedasNecessariasV2(5412));
console.log(moedasNecessariasV2(50));
