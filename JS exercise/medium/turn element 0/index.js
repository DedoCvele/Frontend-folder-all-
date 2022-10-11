/* 
    turn every element in an array into 0
*/

/* Method 1 (Brute force)*/

function convertConvertZero(arr){
    let newArr = []
    for(let i=0; i < arr.length; i++){
        newArr[i] = 0
    }
    return newArr
}

console.log(convertConvertZero([12, 5, 77, 123]))


/* Method 2 (array fill)*/

function convertConvertZero2(arr){
    return new Array(arr.length).fill(0)
}

console.log(convertConvertZero2([12, 5, 77, 123, 3123]))

/* Method 3 (array MAP)*/

function convertConvertZero3(arr){
    return arr.map(elem => 0)
}

console.log(convertConvertZero3([12, 5, 77, 123, 111, 1, 1, 1, 1, 1]))