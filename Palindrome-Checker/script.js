/*
A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.
Here we'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.
We can check if this function works in the Google Console
*/

function palindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
  
console.log(palindrome("eye")); //It should return True
console.log(palindrome("_eye")); //It should return True
console.log(palindrome("race car"));  //It should return True
console.log(palindrome("not a palindrome")); //It should return False
console.log(palindrome("A man, a plan, a canal. Panama")); //It should return True
console.log(palindrome("never odd or even")); //It should return True
console.log(palindrome("nope")); //It should return False
console.log(palindrome("almostomla")); //It should return False
console.log(palindrome("My age is 0, 0 si ega ym.")); //It should return True
console.log(palindrome("1 eye for of 1 eye.")); //It should return False
console.log(palindrome("0_0 (: /-\ :) 0-0")); //It should return True
console.log(palindrome("five|\_/|four")); //It should return False