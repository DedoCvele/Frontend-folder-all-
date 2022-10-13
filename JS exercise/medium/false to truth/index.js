/* 
    True to false
    return the boolean true or false value
*/

/* Method 1 (brute force) */

function convert(arr){
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(!!arr[i]){
            newArr.push(true)
        }else{
            newArr.push(false)
        }
    }
    return newArr
}

console.log(convert([500, 0, "Cvetan", '', 12, NaN]))


/* Method 2 (Map) */

function convert2(arr){
    return arr.map(elem => !!elem)
}

console.log(convert2([500, "Viktor",  0,  '', 133, NaN]))