/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */

/* Method 1 (slow) */

function maxSub(arr){
    
    let maxNum = arr[0]

    for(let i=0; i< arr.length; i++){       
        for(let j= i + 1; j<= arr.length; j++){
            const subarray = (arr.slice(i, j))
            const sum = subarray.reduce((acc, curr) => acc + curr)
            maxNum = Math.max(maxNum, sum)
        }
    }
    return maxNum
}

console.log(maxSub([-2, 1, -3, 4, -1, 2, -5, 0]))

/* Method 2 (fast)*/

function maxSub1(arr){
    
    let maxNum = arr[0]

    for(let i=0; i< arr.length; i++){  
        let sum = 0     
        for(let j= i ; j < arr.length; j++){
            sum += arr[j]
            maxNum = Math.max(maxNum, sum)
        }
    }
    return maxNum
}

console.log(maxSub1([5, 4, -1, 7, 8]))

/* Method 2 (faster/ MOST OPTIMAL)*/

function maxSub2(arr){
    
    let maxNum = arr[0]
    let sum = 0  

    for(let i=0; i< arr.length; i++){  
        
        if(sum<0){
            sum=0
        }
        sum += arr[i]
        if(maxNum < sum){
            maxNum = sum
        }

    }
    return maxNum
}

console.log(maxSub2([2, 4, 3, -1, -4, -9]))