/** Linked List Palindrome **
 *
 * Return true if the given linked list is a palindrome.
 * Otherwise return false.
 *
 * @example
 * isPalindrome(1 -> 2 -> 2 -> 1) true
 * isPalindrome(10 -> 20 -> 30) false
 * isPalindrome(10 -> 20 -> 300 -> 20 -> 10) true
 *
 */

function pal(head){

    const values = []
    let curr = head;

    while(curr){
        values.push(curr.val)
        curr = curr.next
    }

    let L = 0;
    let R = values.length;

    while(L < R){
        if(values[L] === values[R]){
            continue
        }else{
            return false
        }

        L++
        R--
    }

    return true

}

pal(/* (1 -> 2 -> 2 -> 1) */)