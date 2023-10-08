/*
Return true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number.
We can check if this function works in the Google Console
*/

function telephoneCheck(str) {
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return pattern.test(str);
}

console.log(telephoneCheck("555-555-5555")); // It should return a boolean
console.log(telephoneCheck("1 555-555-5555")); // It should return True
console.log(telephoneCheck("1 (555) 555-5555")); // It should return True
console.log(telephoneCheck("5555555555")); // It should return True
console.log(telephoneCheck("555-555-5555")); // It should return True
console.log(telephoneCheck("(555)555-5555")); // It should return True
console.log(telephoneCheck("1(555)555-5555")); // It should return True
console.log(telephoneCheck("555-5555")); // It should return False
console.log(telephoneCheck("5555555")); // It should return False
console.log(telephoneCheck("1 555)555-5555")); // It should return False
console.log(telephoneCheck("1 555 555 5555")); // It should return True
console.log(telephoneCheck("1 456 789 4444")); // It should return True
console.log(telephoneCheck("123**&!!asdf#")); // It should return False
console.log(telephoneCheck("55555555")); // It should return False
console.log(telephoneCheck("(6054756961)")); // It should return False
console.log(telephoneCheck("2 (757) 622-7382")); // It should return False
console.log(telephoneCheck("0 (757) 622-7382")); // It should return False
console.log(telephoneCheck("-1 (757) 622-7382")); // It should return False
console.log(telephoneCheck("2 757 622-7382")); // It should return False
console.log(telephoneCheck("10 (757) 622-7382")); // It should return False
console.log(telephoneCheck("27576227382")); // It should return False
console.log(telephoneCheck("(275)76227382")); // It should return False
console.log(telephoneCheck("2(757)6227382")); // It should return False
console.log(telephoneCheck("2(757)622-7382")); // It should return False
console.log(telephoneCheck("555)-555-5555")); // It should return False
console.log(telephoneCheck("(555-555-5555")); // It should return False
console.log(telephoneCheck("(555)5(55?)-5555")); // It should return False
console.log(telephoneCheck("55 55-55-555-5")); // It should return False
console.log(telephoneCheck("11 555-555-5555")); // It should return False

