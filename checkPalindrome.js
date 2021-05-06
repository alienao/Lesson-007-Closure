// 10.Check whether string is palindrome, or not.

function checkPalindrome(str) {
    const arrVal = str.split('');
    const reverseArrVal = arrVal.reverse();
    const reverseStr = reverseArrVal.join('');

    if(str == reverseStr) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

checkPalindrome("ara");