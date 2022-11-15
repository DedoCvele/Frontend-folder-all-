/** Bubble Sort **
 * 
 * Sort the 'nums' array using bubble sort.
 *  
 * @example
 * bubbleSort([3, 2, 1]) -> [1, 2, 3]
 * bubbleSort([0, 12, 8]) -> [0, 8, 12]
 * bubbleSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

function bubbleSort(arr){
   for(let i=0; i < arr.length; i++){
    for(let j=1; j < arr.length; j++){
        if(arr[j] < arr[j - 1]){
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp
        }
    }
   }
   return arr;
}

console.log(bubbleSort([3, 2, 1]))