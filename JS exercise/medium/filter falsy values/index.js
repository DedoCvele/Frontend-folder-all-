/* 
    Filter out the falsy values from a array
*/

/* Method 1 (Brute force)*/

function filterFalsy(arr){
    let trueArr = []
    for(let i=0; i<arr.length; i++){
        if (!!arr[i] === true)
        trueArr.push(arr[i])
    }
    return trueArr
}

console.log(filterFalsy(['Banana', 'Tomato', false, 0, 'Orange']))

/* Method 1 (Filter)*/

function filterFalsy2(arr){
    return arr.filter(elem => !!elem === true)
}

console.log(filterFalsy2(['Tomato', 'Banana', false, 0, 'Orange', '', NaN, 'Kiwi' ]))