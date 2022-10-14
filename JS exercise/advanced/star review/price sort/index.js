/* 
    Sort an Array from highest price to lowest
*/

function sortArry(arr){
    return arr.sort((a, b) => {
        return b.price - a.price
    })
}

console.log(sortArry([
    {id: 1, price: 50},
    {id: 3, price: 40},
    {id: 4, price: 60},
    {id: 2, price: 20},
]))