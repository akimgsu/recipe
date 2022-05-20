/*

121. Best Time to Buy and Sell Stock 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
https://www.youtube.com/watch?v=i8HjeyMvB5c&list=PLrClazTqVpJnoLCprxP1yIjIzAU8HINcY

*/
const maxProfit = (prices) => {
    let sellIdx = prices.length - 1;
    let profit = 0;
    for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
        let buyVal = prices[buyIdx];
        let sellVal = prices[sellIdx];
        if (buyVal - sellVal >= 0) {
            sellIdx = buyIdx;
        } else {
            let price = sellVal - buyVal;
            profit = Math.max(profit, price);
        }
    }
    return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));