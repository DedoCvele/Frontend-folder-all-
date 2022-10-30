/** Flatten Array **
 * 
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array. 
 *  
 * 
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 * 
 */

 function flatten(arr) {

    const result = []
    function flattenHelpper(arr){
        for(elem of arr){
            if(Array.isArray(elem)){
                flattenHelpper(elem)
            }else{
                result.push(elem)
            }
        }
    }
    
  flattenHelpper(arr)
    return result
};

console.log(flatten(([1, 2, 3, 3, 3, [4, 5]])))
   