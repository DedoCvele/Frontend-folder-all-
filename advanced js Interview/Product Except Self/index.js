/** Product of Array except Self:
 *
 * Write a function that takes in an array of integers 'nums' and
 * returns an array with the product of all integers except the current integer.
 * 
 * Note: You can not use the division operator 
 * 
 * Follow up: Can you do this in constant space? The results array does NOT count to the space.
 *
 * @examples
 * productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
 * productExceptSelf([3, 2, 6, 1]) -> [12, 18, 6, 36]
 * productExceptSelf([10, 1, 5, 2]) -> [10, 100, 20, 50]
 */

/* Not constant Space */

 function exceptSelf(arr){
    
    const result = []
    const left = calLeftPro(arr)
    const right = calRightPro(arr)

    for(let i = 0; i < arr.length; i++){
        result[i] = left[i] * right[i]
    }

    return result
}

function calLeftPro(arr){
    const leftProducts = []

    leftProducts[0] = 1;

    for(let i = 1; i < arr.length; i++){
        leftProducts[i] = arr[i - 1] * leftProducts[i - 1]
    }

    return leftProducts;
}

function calRightPro(arr){
    const rightPro = []

    rightPro[arr.length - 1] = 1

    for(let i = arr.length - 2; i >= 0 ; i--){
        rightPro[i] = arr[i + 1] * rightPro[i + 1]
    }
    return rightPro;
}

console.log(exceptSelf(([1, 2, 3, 4])))

/* Constant Space */

function exceptSelf1(arr){
    const results = []

    results[0] = 1

    for(let i = 1; i < arr.length; i++){
        results[i] = results[i - 1] * arr[i - 1]
    }

    let rightPro = 1;
    for(let i = arr.length - 1; i >= 0 ; i--){
        results[i] = results[i] * rightPro
        rightPro *= arr[i]
    }
    
    return results
}


console.log(exceptSelf1([10, 1, 5, 2]))