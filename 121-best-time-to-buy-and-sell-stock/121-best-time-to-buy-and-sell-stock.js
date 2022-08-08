/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
  let start = 0;
  let result = 0;

  for (let i = 1; i < prices.length; i++) {

    if (prices[start] > prices[i]) {
      start = i;
    } else {
      result = Math.max(result, prices[i] - prices[start])
    }
  }
  return result;
    }
    
   


//loop?
// if prices[i] is less than the start, then buying = prices[i]
// => if (start < prices[i]) 
// prices[i] = start

//selling
// .splice() => get rid of start and from there onwards
// reloop set profit = start 
// if (prices[i] > start) 
// buying = prices[i]
// buying - start = return value 

