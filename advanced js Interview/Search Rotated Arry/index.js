/** Search in Rotated Sorted Array **
 * 
 * Given a rotated sorted array and a target, 
 * return the index of the number in the array 
 * which equals to the target.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * search([5, 4, 1, 2, 3], 2) -> 3
 * search([7, 9, 12, 3, 4], 7) -> 0
 * search([3, 4, 2, 0], 4) -> 1
 * 
 */

function sortLow(arr, target){
    let L = 0
    let R = arr.length - 1

    while(L <= R){
        let mid = Math.floor((L + R) / 2)

        if(arr[mid] === target){
            return mid
        }

        if(arr[mid] < arr[R]){
            if( target < arr[mid] || target > arr[R])
            {
                R = mid - 1
            }else{
                L = mid + 1
            }
        }else{
            if(target > arr[mid] || target < arr[L]){
                L = mid + 1
            }else{
                R = mid - 1
            }
        }
    }
}

console.log(sortLow([7, 9, 12, 3, 4], 7))