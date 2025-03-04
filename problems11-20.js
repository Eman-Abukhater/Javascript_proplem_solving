// 11. Get the Middle Character
function getMiddleCharacter(str) {
    let len = str.length;
    if (len % 2 === 0) {
        return str[len / 2 - 1] + str[len / 2];
    }
    else {
        return str[Math.floor(len / 2)];
    }

}
//console.log(getMiddleCharacter("Eman")); // ma


// 12. Who likes it?
function likes(names) {

    if (names.length === 0) {
        return 'no one likes this';
    }
    else if (names.length === 1) {
        return `${names[0]} likes this`;
    }
    else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    }
    else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}
// console.log(likes([])); // no one likes this
// console.log(likes(["Eman"])); // Eman likes this
// console.log(likes(["Eman", "John", "David","kareem"])); // Eman, John and 2 others like this


// 13. Create Phone Number
 function createPhoneNumber(numbers){
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;

}
//  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890


// 14. Square Every Digit
function squareDigits(num){
    let str = num.toString();
    let result = '';
    for(let i = 0; i<str.length; i++){
        result+=Math.pow(str[i], 2);
    }
    return parseInt(result);
}
// console.log(squareDigits(2117)); // 41149


// 15. You're a Square! 
var isSquare = function(number) {
    return Math.sqrt(number)%1 === 0;
}

// console.log(isSquare(2)); // true

// 16. Highest and Lowest Integer
function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return `${max} ${min}`;
    
}
//  console.log(highAndLow("1 2 3 40 5")); // 40 1

// 17. Descending Order
function descendingOrder(number){
    return parseInt(number.toString().split('').sort((a, b) => b - a).join(''));
}

// alternative solution
function descendingOrder2(n) {
    let digits = String(n).split('');
    let result = [];

    for (let i = 0; i < digits.length; i++) {
        let maxDigit = digits[i];
        let maxIndex = i;

        for (let j = i + 1; j < digits.length; j++) {
            if (digits[j] > maxDigit) {
                maxDigit = digits[j];
                maxIndex = j;
            }
        }

        result.push(maxDigit);
        digits.splice(maxIndex, 1);
        i--; 
    }

    return Number(result.join(''));
}


// console.log(descendingOrder(123456789)); // 987654321
// console.log(descendingOrder(345)); // 543


// 18. Mumbling
const accum = str => {
    return str
      .split('') 
      .map((char, index) => {
        return char.toUpperCase() + char.toLowerCase().repeat(index); 
      })
      .join('-');
  };
  
//   console.log(accum('abcd'));  // 'A-Bb-Ccc-Dddd'
//   console.log(accum('cwAt'));  // 'C-Ww-Aaa-Tttt'
//   console.log(accum('RqaEzty'));  // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
  


// 19. Stop gninnipS My sdroW!

const spinWords = str => {
    return str
      .split(' ') 
      .map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
      })
      .join(' '); 
  };
  
//   console.log(spinWords('This is a test')); // 'This is a test'
//   console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
//   console.log(spinWords('This is another test')); // 'This is rehtona test'
  

// 20. Shortest Word
function findShort(s){
    let words = s.split(' ');
    let min = words[0].length;
    for(let i = 1; i<words.length; i++){
        if(words[i].length < min){
            min = words[i].length;
        }
    }
    return min;
}
// function findShort(s){
//     return Math.min(...s.split(' ').map(word => word.length));
// }


// console.log(findShort('Test where final word shortest see')); // 3
// console.log(findShort('Lets all go on holiday somewhere very cold')); // 2
// console.log(findShort('i want to travel the world writing code one day')); // 1



