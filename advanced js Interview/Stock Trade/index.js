/** Stock Trading
 * 
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing 
 * a different day in the future to sell that stock.
 * 
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

function stocks(price){
    let L = 0;
    let R = 1;
    let maxProfit = 0;

    for(let i = 1; i < price.length; i++){
        const profit = price[R] - price[L]
        if(profit > 0){
            maxProfit = Math.max(maxProfit, profit)
        }else{
            L = R
        }
        R++
    }

    return maxProfit
}

console.log(stocks([2, 9, 18, 9, 2]))