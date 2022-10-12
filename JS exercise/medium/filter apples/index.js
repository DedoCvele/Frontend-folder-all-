/* 
    Filter out the apples :) 
    given an array fillter the apples
*/

/* Method 1 (brute force) */

function appleFilter(arr){
    let noApple = [] 
    for(let i=0; i<arr.length; i++){
    if(arr[i] !== 'Apple'){
        noApple.push(arr[i])
    }
   }
   return noApple
}

console.log(appleFilter(['Apple', 'Banana', 'Orange', 'Apple', "Lemon"]))


/* Method 2 (FILTER) */

function appleFilter2(arr){
    return arr.filter(elem => elem !== 'Apple')
}

console.log(appleFilter2(['Apple', 'Apple', 'Orange', 'Banana', "Pear", 'Tangerine']))