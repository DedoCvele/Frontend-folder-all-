/** selection Sort **
 * 
 * Sort the 'nums' array using selection sort.
 *  
 * @example
 * selectionSort([3, 2, 1]) -> [1, 2, 3]
 * selectionSort([0, 12, 8]) -> [0, 8, 12]
 * selectionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

function selection(arr){
    
    for(let i=0; i < arr.length; i++){
        let currMin = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[currMin]){
                currMin = j
            }
        }

        if(currMin !== i){
            let temp = arr[i]
            arr[i] = arr[currMin]
            arr[currMin] = temp
        }
    }

    return arr
}

console.log(selection([3, 4, 0, 2]))