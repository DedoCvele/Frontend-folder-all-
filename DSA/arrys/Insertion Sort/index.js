/** Insertion Sort **
 * 
 * Sort the 'nums' array using insertion sort.
 *  
 * @example
 * insertionSort([3, 2, 1]) -> [1, 2, 3]
 * insertionSort([0, 12, 8]) -> [0, 8, 12]
 * insertionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

function Insertion(arr){
    for(let i= 1; i < arr.length; i++){
        while(arr[i - 1] > arr[i]){
            let temp = arr[i]
            arr[i] = arr[i - 1]
            arr[i - 1] = temp
            i--;
        }
    }
    return arr;
}

console.log(Insertion([3, 4, 0, 2]))