// 31. Duplicate Encoder
const duplicateEncode = word => {
    const lowerWord = word.toLowerCase();
  
    const charCount = {};
    for (let char of lowerWord) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    return [...word].map(char => {
      return charCount[char] > 1 ? ')' : '(';
    }).join('');
  };
  
//   console.log(duplicateEncode('din')); // '((('
//   console.log(duplicateEncode('(( @')); // '))(('
//   console.log(duplicateEncode('recede')); // '()()()'
//   console.log(duplicateEncode('Success')); // ')())())'
  

// 32. Reversed Strings
function reverse(str){
    return str.split('').reverse().join('');
}   
//alternative solution
// const reverseString = str => {
//     let reversed = ''; 
    
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i]; 
//     }
    
//     return reversed; 
//   };

//  console.log(reverse('Eman')); 

// 3.33. Persistent Bugger

const persistence = num => {
    let steps = 0;
    
    while (num >= 10) {
      num = num.toString().split('').map(Number).reduce((acc, curr) => acc * curr, 1); 
      steps++;  
    }
  
    return steps;  
  };
  

//   console.log(persistence(999)); // 4


//  34. Fibonacci Number

function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    let a = 0, b = 1, sum;
  
    for (let i = 2; i <= n; i++) {
      sum = a + b;
      a = b;
      b = sum;
    }
  
    return b;
  }

//   console.log(fibonacci(4)); // 3

// 35. Replace with Alphabet Position
function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return text.toLowerCase().match(/[a-z]/g)
     .map(letter => alphabet.indexOf(letter) + 1)
     .join(' ');
  }

 // console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// 36. Two Sum
function twoSum(nums , target){
for(let i =0 ; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
        if(nums[i] + nums[j] === target){
            return [i, j];
        }
    }

}
 
}

//  console.log(twoSum([2, 7, 11, 15], 18)); // [1, 2]


// 37. Unique In Order
const uniqueInOrder = iterable => {
    let result = [];
    let last;
    
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== last) {
        result.push(last = iterable[i]);
      }
    }
    
    return result;
  };

//   const uniqueInOrder = iterable => {
//     let result = []; 
  
//     for (let i = 0; i < iterable.length; i++) { 
//       if (i === 0 || iterable[i] !== iterable[i - 1]) { 
//         result.push(iterable[i]);
//       }
//     }
  
//     return result; 
//   };
  

//  console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']



// 38. Best Time to Buy and Sell Stock
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
      if (price < minPrice) {
        minPrice = price;
      } else if (price - minPrice > maxProfit) {
        maxProfit = price - minPrice;
      }
    }
    
    return maxProfit;
  }



// 39. Dubstep

const songDecoder = song => {
    // Step 1: Split the string by 'WUB'
   return song.split('WUB').filter(word => word !== '').join(' ');
    
   
  };
  
//   console.log(songDecoder('AWUBBWUBC')); // Output: 'A B C'
//   console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC')); // Output: 'A B C'
//   console.log(songDecoder('WUBAWUBBWUBCWUB')); // Output: 'A B C'
//   console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB')); // Output: 'WE ARE THE CHAMPIONS MY FRIEND'
  

// 40. Valid Parentheses
const isValid = s => {
  const stack = [];
  const matchingBracket =
   { ')': '(',
     '}': '{', 
     ']': '[' 
    };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};


// console.log(isValid('[')); //false
// console.log(isValid('()')); //true
// console.log(isValid('(]')); //false
// console.log(isValid('{[]}')); //true
// console.log(isValid('([)]')); //false
// console.log(isValid('()[]{}')); //true






