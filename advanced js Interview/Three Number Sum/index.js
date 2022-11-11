/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

function threeSum(nums) {

    nums.sort((a, b) => a - b)
    const result = []

    
    for(let i = 0; i < nums.length - 2 ;  i++){

        if(nums[i] === nums[i-1]){
            continue
        }

        let L = i + 1
        /* console.log(L) */

        let R = nums.length - 1
        /* console.log(R) */

        while(L < R){

        const sum = nums[i] + nums[L] + nums[R]
        /* console.log(`sum=${sum} nums[i]= ${nums[i]}, nums[L]= ${nums[L]},nums[R]= ${nums[R]}`) */
       
        if(sum > 0){
            R--
        }
        if(sum < 0){
            L++
        }
        if(sum === 0){
            result.push([nums[i], nums[L], nums[R]])
            L++
            while(nums[L] === nums[L-1] && L < R){
                L++
            }
        }
        }
    }
    return result
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))