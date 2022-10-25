/** Two Sum **
 * 
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 * 
 */

/* Absolute Brute Force */

function twoSum(arr, int){

    let target = []

    for(let i=0; i < arr.length - 1; i++){
        for(let j= i + 1; j<arr.length; j++){
            if(arr[i] + arr[j] === int){
                target.push(i, j)
            }
        }
    }

    console.log(target)
    
}

twoSum([1, 2, 4, 9], 13)


/* Using Map */

function twoSum1(arr, int){
   const mapDif = new Map()

   for(let i=0; i<arr.length; i++){
    if(mapDif.has(arr[i])){
        return [mapDif.get(arr[i]), i]
    }
    const diff = int - arr[i]
    mapDif.set(diff, i)
   }
    
}

twoSum1([1, 2, 4, 9], 13)
