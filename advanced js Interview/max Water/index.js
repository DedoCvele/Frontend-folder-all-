/** Container with Most Water **
 * 
 * Given an array 'heights' which represents the heights of blocks
 * on a container, find the maximum area of water that can be stored
 * within these blocks. 
 * 
 * @example
 * maxWater([1, 5, 4, 3]) -> 6
 * maxWater([1, 5, 6, 3, 4, 2]) -> 12
 * maxWater([4, 3, 2, 1, 4]) -> 16
 * 
 */

function water(arr) {
    let L = 0;
    let R = arr.length - 1;
    console.log(R)
    let maxArea = 0

    while( L < R ){
        let width = R - L
        let height = Math.min(arr[L], arr[R])
        let area = width * height
    
        if(arr[L] < arr[R]){
            L += 1;
        }else{
            R -= 1;
        }

        if(area > maxArea){
            maxArea = area
        }
    }
    return maxArea
}

console.log(water([1, 5, 4, 3]))