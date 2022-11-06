/** Sum of Two **
 * 
 * Given two arrays, 'nums1' and 'nums2', return true if 
 * there are two numbers in both arrays which can add up to
 * an integer target. Otherwise, return false. 
 * 
 * @example
 * sumOfTwo([1, 2, 3], [5, 2], 8) -> true
 * sumOfTwo([0, 12, 8], [3, 1, 4], 2) -> false
 * sumOfTwo([4, 5, 8], [3, 1, 4], 9) -> true
 * 
 */

function sumOfTwo(arr1, arr2, target){
    const set = new Set()
    for(num of arr1){
        set.add(target - num)
    }

    for(num of arr2){
        if(set.has(num)){
            return true
        }
    }

    return false
}

console.log(sumOfTwo([1, 2, 3], [5, 2], 8))