/*
Convert the given number into a roman numeral.
We can check if this function works in the Google Console
*/


function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
   
    let result = '';
    for (const { value, symbol } of romanNumerals){
        while (num >= value){
            result += symbol;
            num -= value;
        }
    }
    return result;
}
   
console.log(convertToRoman(2)); // It should return II
console.log(convertToRoman(3)); // It should return III
console.log(convertToRoman(4)); // It should return IV
console.log(convertToRoman(5)); // It should return V
console.log(convertToRoman(9)); // It should return IX
console.log(convertToRoman(12)); // It should return XII
console.log(convertToRoman(16)); // It should return XVI
console.log(convertToRoman(29)); // It should return XXIX
console.log(convertToRoman(44)); // It should return XLIV
console.log(convertToRoman(45)); // It should return XLV
console.log(convertToRoman(68)); // It should return LXVIII
console.log(convertToRoman(83)); // It should return LXXXIII
console.log(convertToRoman(97)); // It should return XCVII
console.log(convertToRoman(99)); // It should return XCIX
console.log(convertToRoman(400)); // It should return CD
console.log(convertToRoman(500)); // It should return D
console.log(convertToRoman(501)); // It should return DI
console.log(convertToRoman(649)); // It should return DCXLIX
console.log(convertToRoman(798)); // It should return DCCXCVIII
console.log(convertToRoman(891)); // It should return DCCCXCI
console.log(convertToRoman(1000)); // It should return M
console.log(convertToRoman(1004)); // It should return MIV
console.log(convertToRoman(1006)); // It should return MVI
console.log(convertToRoman(1023)); // It should return MXXIII
console.log(convertToRoman(2014)); // It should return MMXIV
console.log(convertToRoman(3999)); // It should return MMMCMXCIX
