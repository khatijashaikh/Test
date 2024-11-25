
// q1 reverse a string
// var string="hello"
// var reversedString=""
// for(let i=string.length-1;i>=0;i--){
//     reversedString += string[i]
// }
// console.log(reversedString)


// var string="world"
// var reversedString=""
// for(let i=string.length-1;i>=0;i--){
//     reversedString += string[i]
// }
// console.log(reversedString)

// var string="javascript"
// var reversedString=""
// for(let i=string.length-1;i>=0;i--){
//     reversedString += string[i]
// }
// console.log(reversedString)




// q2 check string is palindrome
// var word="radar"
// function checkpalindrome(word){
//     for(let i=0;i<Math.floor(word.length/2);i++){
//         if(word[i]!=word[word.length-1-i]){
//             return "false"
//         }
//     }
//     return "true"
// }
// console.log(checkpalindrome(word))


// var word="hello"
// function checkpalindrome(word){
//     for(let i=0;i<Math.floor(word.length/2);i++){
//         if(word[i]!=word[word.length-1-i]){
//             return "false"
//         }
//     }
//     return "true"
// }
// console.log(checkpalindrome(word))

// var word="level"
// function checkpalindrome(word){
//     for(let i=0;i<Math.floor(word.length/2);i++){
//         if(word[i]!=word[word.length-1-i]){
//             return "false"
//         }
//     }
//     return "true"
// }
// console.log(checkpalindrome(word))








// q3 largest number in array
    // var array = [1,3,5,2];

    // function findlargeElement(array) {
    //     for (let i = array.length - 1; i >= 0; i--) {
    //         if (
    //             (array[i] >= array[i - 1]) && 
    //             (i === array.length - 1 || array[i] >= array[i + 1]) 
    //         ) {
    //             return array[i]; 
    //         }
    //     }
    // }
    
    // console.log(findlargeElement(array));



    
    // var array = [7,2,9,4];

    // function findlargeElement(array) {
    //     for (let i = array.length - 1; i >= 0; i--) {
    //         if (
    //             ( array[i] >= array[i - 1]) && 
    //             (i === array.length - 1 || array[i] >= array[i + 1]) 
    //         ) {
    //             return array[i]; 
    //         }
    //     }
    // }
    
    // console.log(findlargeElement(array));



    
    // var array = [-3,-1,-7,-2];

    // function findlargeElement(array) {
    //     for (let i = array.length - 1; i >= 0; i--) {
    //         if (
    //             (array[i] >= array[i - 1]) && 
    //             (i === array.length - 1 || array[i] >= array[i + 1]) 
    //         ) {
    //             return array[i]; 
    //         }
    //     }
    // }
    
    // console.log(findlargeElement(array));



    // q4 check if two string are  anagrams input: "listen" output:"silent"
    
//q5 count vowels in word  input:"hello" output: 2

// var inputWord = "hello";
// function countVowels(word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         var char = word[i];
//         if (
//             char === 'a' || char === 'e' || char === 'i' || 
//             char === 'o' || char === 'u' || 
//             char === 'A' || char === 'E' || char === 'I' || 
//             char === 'O' || char === 'U'
//         ) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels(inputWord)); 




// var inputWord = "javascript";
// function countVowels(word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         var char = word[i];
//         if (
//             char === 'a' || char === 'e' || char === 'i' || 
//             char === 'o' || char === 'u' || 
//             char === 'A' || char === 'E' || char === 'I' || 
//             char === 'O' || char === 'U'
//         ) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels(inputWord)); 




// var inputWord = "why";
// function countVowels(word) {
//     let count = 0;

//     for (let i = 0; i < word.length; i++) {
//         var char = word[i];
//         if (
//             char === 'a' || char === 'e' || char === 'i' || 
//             char === 'o' || char === 'u' || 
//             char === 'A' || char === 'E' || char === 'I' || 
//             char === 'O' || char === 'U'
//         ) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels(inputWord)); 


//q6 remove duplicate from an array input:[1,2,2,3] output:[1,2,3]

// var inputNumber = [1, 2, 2, 3];
// function removeDuplicates(array) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         let isDuplicate = false;

//         for (let j = 0; j < result.length; j++) {
//             if (array[i] === result[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         if (!isDuplicate) {
//             result.push(array[i]);
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates(inputNumber)); 



// var inputNumber = [5,5,5,5];
// function removeDuplicates(array) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         let isDuplicate = false;

//         for (let j = 0; j < result.length; j++) {
//             if (array[i] === result[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         if (!isDuplicate) {
//             result.push(array[i]);
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates(inputNumber)); 




// var inputNumber = [1, 2, 3,4];
// function removeDuplicates(array) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         let isDuplicate = false;

//         for (let j = 0; j < result.length; j++) {
//             if (array[i] === result[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         if (!isDuplicate) {
//             result.push(array[i]);
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates(inputNumber)); 



//q7 find the intersection of two arrays input[1,2,3][2,3,4] output:[2,3]

// var array1 = [1, 2, 3];
// var array2 = [2, 3, 4];
// function findIntersection(number1, number2) {
//     let result = [];

//     for (let i = 0; i < number1.length; i++) {
//         for (let j = 0; j < number2.length; j++) {
//             if (number1[i] === number2[j]) {
//                 let isAlreadyInResult = false;
//                 for (let k = 0; k < result.length; k++) {
//                     if (result[k] === number1[i]) {
//                         isAlreadyInResult = true;
//                         break;
//                     }
//                 }
//                 if (!isAlreadyInResult) {
//                     result.push(number1[i]);
//                 }
//             }
//         }
//     }

//     return result;
// }
// console.log(findIntersection(array1, array2)); 




// var array1 = [5,6];
// var array2 = [6,7];
// function findIntersection(number1, number2) {
//     let result = [];

//     for (let i = 0; i < number1.length; i++) {
//         for (let j = 0; j < number2.length; j++) {
//             if (number1[i] === number2[j]) {
//                 let isAlreadyInResult = false;
//                 for (let k = 0; k < result.length; k++) {
//                     if (result[k] === number1[i]) {
//                         isAlreadyInResult = true;
//                         break;
//                     }
//                 }
//                 if (!isAlreadyInResult) {
//                     result.push(number1[i]);
//                 }
//             }
//         }
//     }

//     return result;
// }
// console.log(findIntersection(array1, array2)); 



// var array1 = [8,9];
// var array2 = [10,11];
// function findIntersection(number1, number2) {
//     let result = [];

//     for (let i = 0; i < number1.length; i++) {
//         for (let j = 0; j < number2.length; j++) {
//             if (number1[i] === number2[j]) {
//                 let isAlreadyInResult = false;
//                 for (let k = 0; k < result.length; k++) {
//                     if (result[k] === number1[i]) {
//                         isAlreadyInResult = true;
//                         break;
//                     }
//                 }
//                 if (!isAlreadyInResult) {
//                     result.push(number1[i]);
//                 }
//             }
//         }
//     }

//     return result;
// }
// console.log(findIntersection(array1, array2)); 




// Q8 first non repeating character input:"swiss" output:"w"

// var word = "swiss";
// function firstNonRepeatingChar(string) {
//     for (let i = 0; i < string.length; i++) {
//         let isRepeating = false;

//         for (let j = 0; j < string.length; j++) {
//             if (i !== j && string[i] === string[j]) {
//                 isRepeating = true;
            
//             }
//         }

//         if (!isRepeating) {
//             return string[i];
//         }
//     }
 
// }

// console.log(firstNonRepeatingChar(word)); 



// var word = "level";
// function firstNonRepeatingChar(string) {
//     for (let i = 0; i < string.length; i++) {
//         let isRepeating = false;

//         for (let j = 0; j < string.length; j++) {
//             if (i !== j && string[i] === string[j]) {
//                 isRepeating = true;
            
//             }
//         }

//         if (!isRepeating) {
//             return string[i];
//         }
//     }
 
// }

// console.log(firstNonRepeatingChar(word)); 


// var word = "aabbcc";
// function firstNonRepeatingChar(string) {
//     for (let i = 0; i < string.length; i++) {
//         let isRepeating = false;

//         for (let j = 0; j < string.length; j++) {
//             if (i !== j && string[i] === string[j]) {
//                 isRepeating = true;
            
//             }
//         }

//         if (!isRepeating) {
//             return string[i];
//         }
//     }
 
// }

// console.log(firstNonRepeatingChar(word)); 


//q9 merge two sortedarrayinput[1,3,5][2,4,6] output[1,2,3,4,5,6]

// var array1 = [1, 3, 5];
// var array2 = [2, 4, 6];
// function mergeSortedArrays(arr1, arr2) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }

//     return result;
// }

// console.log(mergeSortedArrays(array1, array2)); 



// var array1 = [7,8];
// var array2 = [5, 6];
// function mergeSortedArrays(arr1, arr2) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }

//     return result;
// }

// console.log(mergeSortedArrays(array1, array2)); 



// var array1 = [];
// var array2 = [1,2];
// function mergeSortedArrays(arr1, arr2) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }

//     return result;
// }

// console.log(mergeSortedArrays(array1, array2)); 





// Q10 move zero to end

// var array = [0, 1,0,3,12];

// var index = 0;

// for (var i = 0; i < array.length; i++) {
//   if (array[i] !== 0) {
//     array[index] = array[i];
//     index++;
//   }
// }
// while (index < array.length) {
//   array[index] = 0;
//   index++;
// }

// console.log(array);



// var array = [1,2,3];

// var index = 0;

// for (var i = 0; i < array.length; i++) {
//   if (array[i] !== 0) {
//     array[index] = array[i];
//     index++;
//   }
// }
// while (index < array.length) {
//   array[index] = 0;
//   index++;
// }

// console.log(array);


// var array = [0,0,0];

// var index = 0;

// for (var i = 0; i < array.length; i++) {
//   if (array[i] !== 0) {
//     array[index] = array[i];
//     index++;
//   }
// }
// while (index < array.length) {
//   array[index] = 0;
//   index++;
// }

// console.log(array);


//q11 find the  issing number in the sequence input[1,2,4,5] output: 3

// var inputNumber = [1, 2, 4, 5];
// function findMissingNumber(array) {
//     let n = array.length + 1;
//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = 0;

//     for (let i = 0; i < array.length; i++) {
//         actualSum += array[i];
//     }

//     return expectedSum - actualSum;
// }

// console.log(findMissingNumber(inputNumber)); 


// var inputNumber = [3, 5, 6, 7];

// function findMissingNumber(array) {
//     let n = array.length + 1;
//     let expectedSum = 0;
//     let actualSum = 0;
    
//     for (let i = 1; i <= n; i++) {
//         expectedSum += i + 2; 
//     }

//     for (let i = 0; i < array.length; i++) {
//         actualSum += array[i];
//     }

//     return expectedSum - actualSum;
// }

// console.log(findMissingNumber(inputNumber)); 




// var inputNumber = [1,3];
// function findMissingNumber(array) {
//     let n = array.length + 1;
//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = 0;

//     for (let i = 0; i < array.length; i++) {
//         actualSum += array[i];
//     }

//     return expectedSum - actualSum;
// }

// console.log(findMissingNumber(inputNumber)); 





// q12 target in rotated array

// var array = [4,5,6,7,0,1,2];
// var target = 0;
// function rotatedArray(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

        
//         if (array[mid] === target) {
//             return mid;
//         }

        
//         if (array[left] <= array[mid]) {
//             if (target >= array[left] && target < array[mid]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         } else {
//             if (target > array[mid] && target <= array[right]) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//     }

    
//     return -1;
// }

// console.log(rotatedArray(array, target)); 





// var array = [3, 4, 5, 1, 2];
// var target = 2;
// function rotatedArray(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

        
//         if (array[mid] === target) {
//             return mid;
//         }

        
//         if (array[left] <= array[mid]) {
//             if (target >= array[left] && target < array[mid]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         } else {
//             if (target > array[mid] && target <= array[right]) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//     }

    
//     return -1;
// }

// console.log(rotatedArray(array, target)); 




// var array = [1];
// var target = 0;
// function rotatedArray(array, target) {
//     let left = 0;
//     let right = array.length - 1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (array[mid] === target) {
//             return mid;
//         }        
//         if (array[left] <= array[mid]) {
//             if (target >= array[left] && target < array[mid]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         } else {
//             if (target > array[mid] && target <= array[right]) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//     }

    
//     return -1;
// }

// console.log(rotatedArray(array, target)); 



// q17 sort an array
// var array=[3,1,2]
// var newArray=array.sort();
// console.log(newArray)




// var array=[4,6,5]
// var newArray=array.sort();
// console.log(newArray)


// var array=[-3,-1,-2]
// var newArray=array.sort();
// console.log(newArray)



// q19  Factorial number

// const factorialNumber = 5;
// function factorial(n) {
//     let j = 1;
//     for (let i = 2; i <= n; i++) {
//         j *= i;
//     }
//     return j;
// }
// console.log(factorial(factorialNumber)); 


// const factorialNumber2 = 4;
// function factorial(n) {
//     let j = 1;
//     for (let i = 2; i <= n; i++) {
//         j *= i;
//     }
//     return j;
// }

// console.log(factorial(factorialNumber2)); 


// const factorialNumber3 = 0;
// function factorial(n) {
//     let j = 1;
//     for (let i = 2; i <= n; i++) {
//         j *= i;
//     }
//     return j;
// }

// console.log(factorial(factorialNumber3)); 



//q14 check if number is prime or not input 5 output true

// function isPrime(number) {
//     if (number <= 1) {
//         return false; 
//     }

//     for (let i = 2; i < number; i++) {
        
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true; 
// }

// console.log(isPrime(5)); 
// console.log(isPrime(4));  
// console.log(isPrime(11)); 


//q15 generate fibonnaci sequence input 5 output[0,1,1,2,3]
// function generateFibonacci(n) {
//     let fibSequence = [0, 1];
//     if (n <= 0) return [];
//     if (n === 1) return [0];

//     for (let i = 2; i < n; i++) {
//         let nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
//         fibSequence.push(nextNumber);
//     }

//     return fibSequence;
// }

// console.log(generateFibonacci(5)); 
// console.log(generateFibonacci(7)); 
// console.log(generateFibonacci(1)); 


//q18 check for balance paranthese input "()" "(())" output true





