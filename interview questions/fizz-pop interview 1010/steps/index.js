/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate 
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

function stepes(int){
    for(let i=0; i<int; i++){
        let step = ""
        for(let j=0; j<int; j++){
            if( i === j || i > j){
                step +="#"
            }else{
                step +=" "
            } 
        }
        console.log(step)
    }
    
}

stepes(5)