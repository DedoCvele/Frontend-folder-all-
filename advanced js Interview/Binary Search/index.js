/** Binary Search **
 * 
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target. 
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 * 
 */

function binSearch(arr, target){
    let L = 0;
    let R = arr.length - 1;
    let mid = 0

    while(true){
        
    mid = Math.floor((L + R) / 2)

        if(arr[mid] > target){
            R = mid - 1
        }

        if (arr[mid] < target){
            L = mid + 1
            
        }

        if(arr[mid] === target){
            return arr[mid]
        }
    }
}

console.log(binSearch([-1, 4, 18, 20], 18))