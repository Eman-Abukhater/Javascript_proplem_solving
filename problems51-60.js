// 51. Extract the Domain Name From a URL
const domainName = url => {
    const parsedUrl = new URL(url);  
    const hostname = parsedUrl.hostname;  
    return hostname.replace('www.', '');  
  };
  
//   console.log(domainName('www.google.ca')); // google
//   console.log(domainName('http://google.com')); // google
//   console.log(domainName('https://google.com')); // google
//   console.log(domainName('http://google.co.jp')); // google
//   console.log(domainName('https://www.google.com')); // google


// 52. First Non-repeating Character
const firstNonRepeatingLetter = str => {
    const freqchar = {};
    
    for (let char of str.toLowerCase()) {
      freqchar[char] = (freqchar[char] || 0) + 1;
    }
    
    for (let char of str) {
      if (freqchar[char.toLowerCase()] === 1) {
        return char; 
      }
    }
    
    return '';
  };
  
//   console.log(firstNonRepeatingLetter('a')); // 'a'
//   console.log(firstNonRepeatingLetter('stress')); // 't'
//   console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
//   console.log(firstNonRepeatingLetter('abba')); // ''
//   console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','
  


// 53. Roman Numerals Encoder
const convertToRoman = number => {
    const romanNumerals = [
      ['','I','II','III','IV','V','VI','VII','VIII','IX'],  
      ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],  
      ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],  
      ['','M','MM','MMM'] 
    ];
  
    const digits = number.toString().split('').reverse();
    let roman = '';
  
    // Process each digit and build the Roman numeral string
    for (let i = 0; i < digits.length; i++) {
      roman = romanNumerals[i][parseInt(digits[i])] + roman;
    }
  
    return roman;
  };

  
//   console.log(convertToRoman(4)); // IV
//   console.log(convertToRoman(9)); // IX
//   console.log(convertToRoman(11)); // XI
//   console.log(convertToRoman(19)); // XIX
//   console.log(convertToRoman(22)); // XXII
//   console.log(convertToRoman(15)); // XV
//   console.log(convertToRoman(39)); // XXX + IX = XXXIX
//   console.log(convertToRoman(160)); // C + LX = CLX
//   console.log(convertToRoman(207)); // CC + VII = CCVII
//   console.log(convertToRoman(246)); // CC + XL + VI = CCXLVI
//   console.log(convertToRoman(789)); // DCC + LXXX + IX = DCCLXXXIX
//   console.log(convertToRoman(1009)); // M + IX = MIX
//   console.log(convertToRoman(1066)); // M + LX + VI = MLXVI
//   console.log(convertToRoman(1776)); // M + DCC + LXX + VI = MDCCLXXVI
//   console.log(convertToRoman(1918)); // M + CM + X + VIII = MCMXVIII
//   console.log(convertToRoman(1954)); // M + CM + L + IV = MCMLIV
//   console.log(convertToRoman(2014)); // MM + X + IV = MMXIV
//   console.log(convertToRoman(2421)); // MM + CD + XX + I = MMCDXXI
//   console.log(convertToRoman(3999)); // MMM + CM + XC + IX = MMMCMXCIX
  

// 54. Scramble

const scramble = (str1, str2) => {
    const freqchar = {};
    
    for (let char of str1) {
      freqchar[char] = (freqchar[char] || 0) + 1;
    }
    
    for (let char of str2) {
      if (!freqchar[char]) {
        return false;
      }
      freqchar[char]--;
    }
    
    return true;
  }


//   console.log(scramble('javscripts', 'javascript')); // false




// 55. Wave, wAve, waVe, wavE
const wave = str => {
    const result = [];
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        continue;
      }
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
    
    return result;
  };


//   console.log(wave('hello')); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']

// 56. Concatenation of Array

const getConcatenation = nums => {
    return nums.concat(nums);
  };
  
  
// const getConcatenation = nums => {
//     return [...nums, ...nums];
//   };


// 57. Get Names

const getNames = users => {
    const names = [];
    users.forEach(user => names.push(user.name));
    return names;
  };
  

// 58. Object Keys from snake_case to camelCase

const toCamelCase = str => {
    return str
      .split('_')
      .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
  };
  

// const toCamelCase = str => {
//     return str.replace(/_./g, match => match[1].toUpperCase());
//   };


// 59. Valid Palindrome


const isPalindrome = s => {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    return cleaned === cleaned.split('').reverse().join('');
  };
  

// 60. Move Zeroes

const moveZeroes = nums => {
    let j = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
      }
    }
  
    return nums;
  };