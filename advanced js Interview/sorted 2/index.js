/** Two Sorted Sum **
 * 
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array. 
 * 
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 * 
 */

function twoSortedSum(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while ( l < r){
        const sum = arr[l] + arr[r]

        if(sum > target){
            r--;
        }

        if(target > sum){
            l++
        }

        if( sum == target){
            return[l, r]
        }
    }
}

console.log(twoSortedSum([2, 3, 4], 6))
