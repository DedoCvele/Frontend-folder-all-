/** Move Zeroes **
 * 
 * Given an array 'nums', move all the zeroes to the end.
 * 
 * Note: You can not make a copy of the 'nums' array.
 * 
 * @example
 * moveZeroes([1, 0, 2, 0]) -> [1, 2, 0, 0]
 * moveZeroes([10, 0, 9]) -> [10, 9, 0]
 * moveZeroes([3, 4, 0, 2, 0]) -> [3, 4, 2, 0, 0]
 * 
 */

function moveZero(arr){
    let L = 0;
    let R = 0;
    
    while(R < arr.length){
        if(arr[R] !== 0){
            let temp = arr[R]
            arr[R] = arr[L]
            arr[L] = temp;
            L += 1;
        }

        R += 1
    }

    return arr
}

console.log(moveZero([0, 2, 0, 0, 1, 10, 2, 0, 3, 4, 0, 2, 0]))