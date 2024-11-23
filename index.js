
// Q1 two sum problem that add up to target 
// var array = [2,7,11,15];
// var target = 9;

// for ( i = 0; i < array.length; i++) {
//     for ( j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === target) {
//             console.log( i ,j);
//         }
//     }
// }


// var array = [3,2,4,];
// var target = 6;

// for ( i = 0; i < array.length; i++) {
//     for ( j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === target) {
//             console.log( i ,j);
//         }
//     }
// }






// Q3 remove specific elemnt from array
// var array = [3,2,2,3];
// var target = 3;

// var number = 0;
// while (number < array.length) {
//   if ((array[number] != target)) {
//     console.log(array);
//   }
//   number++;
// }

//  print in array form [0,1,3,0,4]
// var array = [0, 1, 2, 2, 3, 0, 4, 2];
// var target = 2;

// var index = 0;

// for (var i = 0; i < array.length; i++) {
//   if (array[i] !== target) {
//     array[index] = array[i];
//     index++;
//   }
// }
// array.length = index;

// console.log(array);


// var array = [1,1,1,1];
// var target = 1;

// var number = 0;
// while (number < array.length) {
//   if ((array[number] != target)) {
//     console.log(array[number]);
//   }
//   number++;
// }




// Q4 sum of gitit of number input 13 output 5

// var number = 123;

// var sum = 0;

// while (number > 0) {
//   var digit = number % 10;

//   sum += digit;

//   number = Math.floor(number / 10);
// }
// console.log(sum);






// Q5 Binary Search
// var array = [1, 2, 3, 4, 5];
// var target = 3;

// function Binarysearch1(array, target) {
//   var left = 0;
//   var right = array.length - 1;

//   while (left <= right) {
//     const middleIndex = Math.floor((left + right) / 2);

//     if (array[middleIndex] == target) {
//       return middleIndex;
//     } else if (array[middleIndex] > target) {
//       right = middleIndex - 1;
//     } else if (array[middleIndex] < target) {
//       left = middleIndex + 1;
//     }
//   }
// }
// console.log(Binarysearch1(array, target));








// var array = [5, 15, 25, 35, 45];
// var target = 35;

// function Binarysearch2(array, target) {
//   var left = 0;
//   var right = array.length - 1;

//   while (left <= right) {
//     const middleIndex = Math.floor((left + right) / 2);

//     if (array[middleIndex] == target) {
//       return middleIndex;
//     } else if (array[middleIndex] > target) {
//       right = middleIndex - 1;
//     } else if (array[middleIndex] < target) {
//       left = middleIndex + 1;
//     }
//   }
// }
// console.log(Binarysearch2(array, target));


// var array = [10, 20, 30, 40];
// var target = 25;

// function Binarysearch3(array, target) {
//   var left = 0;
//   var right = array.length - 1;

//   while (left <= right) {
//     const middleIndex3 = Math.floor((left + right) / 2);

//     if (array[middleIndex3] == target) {
//       return middleIndex3;
//     } else if (array[middleIndex3] > target) {
//       right = middleIndex3 - 1;
//     } else if (array[middleIndex3] < target) {
//       left = middleIndex3 + 1;
//     }
//   }
// }
// console.log(Binarysearch3(array, target));




// Q6 move zero to end input [0,1,0,3,12] output[1,3,12,0,0]

// var array = [0, 1, 0, 3, 12];

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



 // Q10 count occurence
//  var word = "banana";
//  function countCharacter(string) {
//      var count = 0;
//      for ( i = 0; i < string.length; i++) {
//        if (string[i] === 'a') {
//          count++;
//        }
//      }
//      return count;
//    }
   
   
//    console.log(countCharacter(word)); 
   
  

 // var word = "hello";
 // function countCharacter(string) {
 //     let count = 0;
 //     for ( i = 0; i < string.length; i++) {
 //       if (string[i] === 'l') {
 //         count++;
 //       }
 //     }
 //     return count;
 //   }
   
   
 //   console.log(countCharacter(word)); 
   

 // var word = "javascript";
 // function countCharacter(string) {
 //     let count = 0;
 //     for ( i = 0; i < string.length; i++) {
 //       if (string[i] === 'j') {
 //         count++;
 //       }
 //     }
 //     return count;
 //   }
   
   
 //   console.log(countCharacter(word)); 
   






    //Q 15 find peak element
    // var array = [10,20,15]; 
    // function findPeakElement(array) {
    //     for (let i = 0; i < array.length; i++) {
           
    //         if ( array[i] >= array[i + 1]) {
    //             return array[i];
    //         }
    //     }
    
    // }
    // console.log(findPeakElement(array)); 
    

    
    // var array = [1,2,3,1]; 
    // function findPeakElement(array) {
    //     for (let i = 0; i < array.length; i++) {
           
    //         if (i === array.length - 1 || array[i] >= array[i + 1]) {
    //             return array[i];
    //         }
    //     }
    
    // }
    // console.log(findPeakElement(array));
    

    // var array = [1, 2, 1, 3, 5, 6, 4];

    // function findPeakElement(array) {
    //     for (let i = array.length - 1; i >= 0; i--) {
    //         if (
    //             (i === 0 || array[i] >= array[i - 1]) && 
    //             (i === array.length - 1 || array[i] >= array[i + 1]) 
    //         ) {
    //             return array[i]; 
    //         }
    //     }
    // }
    
    // console.log(findPeakElement(array));
    




// Q16 check array is sorted 
    // var array = [1, 2, 3, 4];
    // function valueSorted(array) {
    //     for (i = 0; i < array.length - 1; i++) {
    //         if (array[i] > array[i + 1]) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    
    // console.log(valueSorted(array)); 
    
    

    // var array = [4, 3, 2, 1];
    // function valueSorted(array) {
    //     for (i = 0; i < array.length - 1; i++) {
    //         if (array[i] > array[i + 1]) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    
    // console.log(valueSorted(array));

    // var array = [1,3,2,4];
    // function valueSorted(array) {
    //     for (i = 0; i < array.length - 1; i++) {
    //         if (array[i] > array[i + 1]) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    
    // console.log(valueSorted(array));
    


// Q 17 gwnrate pascal triangle 
// function generatePascalsRow(n) {
//     let row = [1]; 

//     for (let i = 1; i <= n; i++) {
//         row[i] = row[i - 1] * (n - i + 1) / i;
//     }

//     return row;
// }
// let n = 3;
// console.log(generatePascalsRow(n)); 

   

// q20 count distinct elemnt in array input[1,2,2,3] output 3
// function countDistinctElements(arr) {
//     let distinctCount = 0;
//     let seen = [];  

//     for (let i = 0; i < arr.length; i++) {
        
//         if (!seen.includes(arr[i])) {
//             seen.push(arr[i]);  
//             distinctCount++;     
//         }
//     }

//     return distinctCount; 
// }


// let input = [1, 2, 2, 3];
// console.log(countDistinctElements(input)); 




















// Q14 number is prime


// const number = 5;
// function primeNumber(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// console.log(primeNumber(number));




