/** Minimum Number in Rotated Sorted Array **
 * 
 * Given a rotated sorted array, return the smallest 
 * number in the array.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * findMinimum([5, 4, 1, 2]) -> 1
 * findMinimum([7, 9, 12, 3, 4]) -> 3
 * findMinimum([3, 4, 2, 0]) -> 0
 * 
 */

/* Smart Ass way */

function minRotate(arr){
    
    arr.sort((a, b) => a - b)

    return arr[0]

}

