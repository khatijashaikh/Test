
// Q1 two sum problem
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
//     console.log(array[number]);
//   }
//   number++;
// }


// var array = [0,1,2,2,3,0,4,2];
// var target = 2;

// var number = 0;
// while (number < array.length) {
//   if ((array[number] != target)) {
//     console.log(array[number]);
//   }
//   number++;
// }

// var array = [1,1,1,1];
// var target = 1;

// var number = 0;
// while (number < array.length) {
//   if ((array[number] != target)) {
//     console.log(array[number]);
//   }
//   number++;
// }










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
           
    //         if (i === array.length - 1 || array[i] >= array[i + 1]) {
    //             return array[i];
    //         }
    //     }
    
    // }
    // console.log(findPeakElement(array)); 
    

    
    var array = [1,2,3,1]; 
    function findPeakElement(array) {
        for (let i = 0; i < array.length; i++) {
           
            if (i === array.length - 1 || array[i] >= array[i + 1]) {
                return array[i];
            }
        }
    
    }
    console.log(findPeakElement(array));
    


    // var array = [1,2,3,5,6,4]; 
    // function findPeakElement(array) {
    //     for (let i = 0; i < array.length; i++) {
           
    //         if (i === array.length - 1 || array[i] >= array[i + 1]) {
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
    



   