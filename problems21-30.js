// 21. Bit Counting

function bitCounting(n) {
    const binary = n.toString(2);
    let count = 0; 
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') {
        count++; 
      }
    }
  
    return count;
}

//  console.log(bitCounting(7)); //3

// alternative solution
function bitCounting2(n) {
    return n.toString(2).split('').filter(x => x === '1').length;
  }
  


// 22.  Exes and Ohs

function exesAndOhs(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//  console.log(exesAndOhs("ooxxx")); // true


// 23. Sum of Positives

function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
}

//  console.log(positiveSum([-1, 2, 3, 4, 5])); // 14


// 24. Find The Parity Outlier

function findOutlier(integers) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
    return evenCount > oddCount? integers.find(x => x % 2!== 0) : integers.find(x => x % 2 === 0);
  }

//   console.log(findOutlier([2, 4, 6, 8, 10, 3])); // 3


// 25. Array.diff

function arrayDiff(a, b) {
    return a.filter(x =>!b.includes(x));
}

//  console.log(arrayDiff([1, 2, 2, 3], [2, 3, 4])); // [1]



// 26. Capitalize Words

String.prototype.capitalize = function () {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};
  
//   var str = "How can mirrors be real if our eyes aren't real";
//   console.log(str.capitalize()); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'


// 27. Complementary DNA

function DNAStrand(dna) {
    return dna.split('').map(nucleotide => {
        switch (nucleotide) {
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
            default:
                return nucleotide;
        }
    }).join('');
}

//  console.log(DNAStrand("AAAA")); // "TTTT"
//  console.log(DNAStrand('ATTGC')); // 'TAACG'



// function DNAComplement(dna) {
//     return dna.replace(/A/g, 'T').replace(/T/g, 'A').replace(/C/g, 'G').replace(/G/g, 'C');
// }

//  console.log(DNAComplement("ATTGC")); // "TAACG"



// 28. Isograms
function isIsogram(str) {
    str = str.toLowerCase();
    const charset = new Set();

    for (let char of str) {
        if (charset.has(char)) {
            return false;
        }
        charset.add(char);
    }
    return true;
}

//  console.log(isIsogram("Dermatoglyphics")); // true



// function isIsogram(str) {
//     return new Set(str.toLowerCase().replace(/[^a-z]/g, '')).size === str.toLowerCase().replace(/[^a-z]/g, '').length;
// }

//  console.log(isIsogram("Dermatoglyphics")); // true


// 29. FizzBuzz
function fizzBuzz() {
    let result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    return result.join(",");
}



// console.log(fizzBuzz()); // "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz"



// 30. Counting Duplicates
function duplicateCount(text) {
    text = text.toLowerCase();
    const charset = new Set();
    const duplicates = new Set();

    for (let char of text) {
        if (charset.has(char)) {
            duplicates.add(char);
        }
        charset.add(char);
    }
    return duplicates.size;
}

//   console.log(duplicateCount("abcde")); // 0