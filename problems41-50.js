// 41. Reverse Integer
const reverse = x => {
    let reversedNum = Number(Math.abs(x).toString().split('').reverse().join(''));
    if (x < 0) {
      reversedNum *= -1;
    }
      if (reversedNum < -(2**31) || reversedNum > (2**31 - 1)) {
      return 0;
    }
  
    return reversedNum;
  };
  
//   console.log(reverse(0));            // 0
//   console.log(reverse(120));          // 21
//   console.log(reverse(123));          // 321
//   console.log(reverse(-123));         // -321
//   console.log(reverse(1534236469));   // 0 
  
// 42. Remove Duplicates from Sorted Array
const removeDuplicates = nums => {
    if (nums.length <= 1) {
      return nums.length;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  };
  

// console.log(removeDuplicates([1, 1, 2])); // 2 (because [1, 2] has length 2)
// console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
// console.log(removeDuplicates([])); // 0

// 43. Kids With the Greatest Number of Candies

const kidsWithCandies = (candies, extraCandies) => {
    let maxCandies = -Infinity;
    for (let i = 0; i < candies.length; i++) {
      if (candies[i] > maxCandies) {
        maxCandies = candies[i];
      }
    }
  
    const result = [];
  
    for (let i = 0; i < candies.length; i++) {
      result.push(candies[i] + extraCandies >= maxCandies);
    }
  
    return result;
  };

//   console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true, true, true, false, true]
  

// const kidsWithCandies = (candies, extraCandies) => {
//     const max = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= max);
//   };


// 44. ROT13
const rot13 = message => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shifted = alphabet.slice(13) + alphabet.slice(0, 13);
    return message
      .split('')
      .map(char => {
        const lower = char.toLowerCase();
        const index = alphabet.indexOf(lower);
        if (index === -1) {
          return char;
        }
        const ciphered = shifted[index];
        return char === lower ? ciphered : ciphered.toUpperCase();
      })
      .join('');
  };

//   console.log(rot13('az AZ')); // nm NM
//   console.log(rot13('10+2 is twelve.')); // 10+2 vf gjryir.
//   console.log(rot13('abcdefghijklmnopqrstuvwxyz')); // nopqrstuvwxyzabcdefghijklm
  

// 45. Richest Customer Wealth
const maximumWealth = accounts => {
    let maxWealth = 0;  
  
    for (let i = 0; i < accounts.length; i++) {
      const customerWealth = accounts[i].reduce((acc, curr) => acc + curr, 0);
  
      maxWealth = Math.max(maxWealth, customerWealth);
    }
  
    return maxWealth; 
  };
  
//   console.log(
//     maximumWealth([
//       [2, 8, 7],
//       [7, 1, 3],
//       [1, 9, 5],
//     ])
//   ); // 17
//   console.log(
//     maximumWealth([
//       [1, 5],
//       [7, 3],
//       [3, 5],
//     ])
//   ); // 10
//   console.log(
//     maximumWealth([
//       [1, 2, 3],
//       [3, 2, 1],
//     ])
//   ); // 6



// 46. The Hashtag Generator

const generateHashtag = str => {
    str = str.trim();
  
    if (str === '') {
      return false;
    }
  
    const hashtag = '#' + str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  
    return hashtag.length <= 140 ? hashtag : false;
 };

// const generateHashtag = str => {
//     const result = str
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join('');
  
//     return result.length > 140 || result === '' ? false : `#${result}`;
//   };


//   console.log(generateHashtag('JavaScript')); // #JavaScript
// console.log(generateHashtag('Do we have a Hashtag')); // #DoWeHaveAHashtag
// console.log(generateHashtag('    Hello     World   ')); // #HelloWorld
// console.log(generateHashtag('coding' + ' '.repeat(140) + 'for life')); // #CodingForLife
// console.log(generateHashtag('')); // false
// console.log(generateHashtag(' ')); // false
// console.log(generateHashtag('a'.repeat(140))); // false
// console.log(generateHashtag(' '.repeat(200))); // false
  
// 47. Pete, the Baker
const cakes = (recipe, available) => {
    let minCakes = Infinity;
    
    for (let ingredient in recipe) {
      if (!available[ingredient]) {
        return 0;
      }
      
      const cakesForIngredient = Math.floor(available[ingredient] / recipe[ingredient]);
      
      minCakes = Math.min(minCakes, cakesForIngredient);
    }
    
    return minCakes;
 };
  
//   let recipe = { flour: 500, sugar: 200, eggs: 1 };
//   let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
//   console.log(cakes(recipe, available)); // 2
  
//   recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
//   available = { sugar: 500, flour: 2000, milk: 2000 };
//   console.log(cakes(recipe, available)); // 0


// 48. Count Characters in Your String
const count = string => {
    const frequency = {};
  
    for (let char of string) {
      if (frequency[char]) {
        frequency[char]++;
      } else {
        frequency[char] = 1;
      }
    }
  
    return frequency;
  };
  
//   console.log(count('')); // {}
//   console.log(count('aba')); // { a: 2, b: 1 }

// 49. Break camelCase
const solution = str => {
    return str
      .split('')
      .map(char => {
        if (char === char.toUpperCase()) {
          return ' ' + char;
        }
        return char;
      })
      .join('');
  };




//   console.log(solution('camelCasingHere')); // camel Casing Here
//   console.log(solution('No Camels here')); // No Camels here
//   console.log(solution('ABC')); // ABC
//   console.log(solution('')); // ''

  
// 50. Check if Word Equals Summation of Two Words
const isSumEqual = (firstWord, secondWord, targetWord) => {
    const getNumericValue = (word) => {
      return parseInt(word.split('').map(char => char.charCodeAt(0) - 'a'.charCodeAt(0)).join(''));
    };
    
    const firstNum = getNumericValue(firstWord);
    const secondNum = getNumericValue(secondWord);
    const targetNum = getNumericValue(targetWord);
    
    return firstNum + secondNum === targetNum;
  };
  
//   console.log(isSumEqual('acb', 'cba', 'cdb')); // true
//   console.log(isSumEqual('aaa', 'a', 'aab')); // false
  




























