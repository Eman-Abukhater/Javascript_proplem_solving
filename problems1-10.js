// 1. Multiples of 3 or 5
function multiplesOf3and5(number) {
    let sum = 0;
    for( let i = 0; i< number;i++){
        if(i%3==0 || i%5==0){
            sum+=i;
        }
    };
    return sum;

}

// console.log(multiplesOf3and5(0)); // 0
// console.log(multiplesOf3and5(-15)); // 0
// console.log(multiplesOf3and5(200)); // 9168

// 2. Even or Odd
function evenOrOdd(number) {
    if(number%2==0){
        return "Even";
    }else{
        return "Odd";
    }
}
// console.log(evenOrOdd(6)); // Even

// 3. Clock
function clock(h,m,s) {
    return (h*60*60 + m*60 + s)*1000;
   
}
// 4. Returning Strings
function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}
function greet2(name) {
    return "Hello, " + name + " how are you doing today?";
}
//  console.log(greet("Eman")); 
 
// 5. Century From Year
function century(year) {
    return Math.ceil(year/100);
}
// console.log(century(1701)); // 18
// console.log(century(1900)); // 19

// 6. Keep Hydrated!
function litres(time) {
    return Math.floor(time/2);
}

// 7. Is n Divisible by x and y?
function isDivisible(n, x, y) {
    return n%x==0 && n%y==0;
}
// console.log(isDivisible(12, 3, 4)); // true


// 8. Vowel Count
function vowelCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

// console.log(vowelCount("Eman")); // 2



// 9. Disemvowel Trolls
function disemvowelTrolls(str) {
    const vowels = 'aeiouAEIOU';
    let result = '';
    for(let i = 0; i<str.length; i++){
        if(!vowels.includes(str[i])){
            result+=str[i];
        }
    }
    return result;
}
// console.log(disemvowelTrolls("moorning")); // "mrnng"
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}


// 10. Find the Odd Int 
function findOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {  
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return arr[i];
        }
    }
}
//console.log(findOdd([1, 1, 2, 2, 3, 3, 3])); // 3




