/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */


/* Method 1 Brute Force */

function stringifyId(arr){
    const idArry = arr.map(obj => obj.id)
    const uniqueArray = []
    let idString = "";

    for ( let id of idArry){
        if (!uniqueArray.includes(id)){
            uniqueArray.push(id)
        }
    }

    for( let i=0; i < uniqueArray.length; i++){
        if(i !== uniqueArray.length -1){
            idString += `${uniqueArray[i]}, `
        }else{
            idString += uniqueArray[i];
        }
    }
    return idString
}

console.log(stringifyId([  { id: 1 },  { id: 2 },  { id: 2 },  { id: 3 }, ]))


/* Method 2 Right Way */

function stringifyId2(arr){
    const idArry = arr.map(obj => obj.id)
    const uniqueArray = [...new Set(idArry)]
    return uniqueArray.join(", ")
}

console.log(stringifyId2([  { id: 'ABC', name: 'David' },  { id: 'abc', name: 'Bragg' },  { id: 'CBA', name: 'Bragg' }, ]))