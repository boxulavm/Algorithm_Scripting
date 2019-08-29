// FreeCodeCamp Basic Algorithm Scripting Challenges
// https://learn.freecodecamp.org/


// #1  ****************************** Convert Celsius to Fahrenheit ******************************



// const convertToFahrenheit = celsius => {
//     let fahrenheit = celsius * 9/5 + 32;
//     return fahrenheit;
// }

// console.log(convertToFahrenheit(100));




// #2  ****************************** Reverse a string ******************************



// const reverseString = str => {
//     return str.split('')
//               .reverse()
//               .join('');
// }

// console.log(reverseString('Hello'))




// #3 ****************************** Factorialize a Number  ******************************



// const factorialize = num => {
//     const count = num;

//     if(count == 0){
//         return 1;
//     } else {

//         for(i = 1; i < count; i++){
//             num = num*i
//         }
//         return num;
//     }

// }


// console.log(factorialize(3));




// #4 ****************************** Find the Longest Word in a String  ******************************



// const findLongestWordLength = str => {
//     const arrayOfStrings = str.split(' ');
//     let LongestString = '';

//     for ( i = 0; i < arrayOfStrings.length; i++ ){
//         if(LongestString.length < arrayOfStrings[i].length){
//             LongestString = arrayOfStrings[i]
//         }
//     }

//     str = LongestString;

//     return str.length;
// }
  
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));




// #5 ******************************  Return Largest Numbers in Arrays  ******************************


// const largestOfFour = arr => {
//     let largestArr = [];

//     for(i = 0; i < arr.length; i++){
//         let largestNum = 0;
//         for( j = 0; j < arr.length; j++){
//             if(largestNum < arr[i][j]){
//                 largestNum = arr[i][j]
//             }
//         }
//         largestArr.push(largestNum)
//     }

//     return largestArr;
//   }
  
//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));






// #6 ******************************  Confirm the Ending  ******************************
// Check if a string (first argument, str) ends with the given target string (second argument, target).



// const confirmEnding = (str, target) => {
//     const start = str.length-(target.length);
//     if(str.substr(start, str.length) == target){
//         return true;
//     } else {
//         return false
//     }
//   }
  
//   console.log(confirmEnding("Bastian", "an"));






// #7 ******************************  Repeat a String Repeat a String  ******************************
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.


// const repeatStringNumTimes = (str, num) => {
//     const holderArr = [];
//     if( num < 0){
//         return  '';
//     };
//     for( let i = 0; i < num; i++){
//         holderArr.push(str)
//     }
//     str = holderArr.join('');
//     return str;
//   }
  
// console.log(repeatStringNumTimes("abc", 3));




// #8 ******************************  Truncate a String  ******************************
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.




// const truncateString = (str, num) => {
//     if(str.length > num ){
//         str = str.slice(0 , num).concat('...');
//     }
//     return str;
//   }

  
//   console.log(truncateString("Peter Piper picked a peck of pickled peppers", 3));




// #9 ******************************  Finders Keepers  ******************************
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.


// function findElement(arr, func) {
//     const num = arr.filter( func );
//     if(num.length > 1){
//         return num[0];
//     }
//     return undefined;
//   }
  
//   console.log(findElement([1, 2, 3, 4, 6 , 8], num => num % 2 === 0));





// #10 ****************************** Boo Woo ******************************
// Check if a value is classified as a boolean primitive. Return true or false.


// function booWho(bool) {
//     if(typeof(bool) === 'boolean' ){
//         return true;
//     } else {
//         return false
//     };
//   }
  
//   console.log(booWho(null));





// #11 ****************************** Boo Woo ******************************
// Title Case a Sentence. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".



// const titleCase = str => {
//     const convertToArray = str.toLowerCase().split(' ');
//     const result = convertToArray.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
//     return result.join(' ')
// }
  
// console.log(titleCase("I'm a little tea pot"));





// #13 ******************************  Slice and Splice ******************************

// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.


// const frankenSplice = (arr1, arr2, n) => {
//     const copyOfArr2 = arr2.slice();
//     for(let i = 0; i < arr1.length; i++){
//         copyOfArr2.splice(n, 0, arr1[i]);
//         n++
//     }
//     return copyOfArr2;
// }
  
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));





// #14 ****************************** Falsy Bouncer ******************************

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean


// const bouncer = arr => arr.filter(Boolean);
  
// console.log(bouncer([7, "ate", "", false, 9]));






// #15 ******************************   Where do I Belong ******************************

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.


// const getIndexToIns = (arr, num) => {
//     arr.push(num);
//     arr.sort((a, b) => ( a-b));
//     return arr.indexOf(num);
//   }
  
//  console.log(getIndexToIns([40, 60], 50));





// #16 ******************************   Mutations  ******************************
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


// const mutation = arr => {
//   return arr[1].toLowerCase()
//     .split('')
//     .every(letter => {
//       return arr[0].toLowerCase()
//         .indexOf(letter) != -1;
//     });
// }

// console.log(mutation(["hello", "hey"]));




// #17 ******************************   Chunky Monkey  ******************************
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// const chunkArrayInGroups = (arr, size) => {
//   // Break it up.
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i+=size) {
//   arr2.push(arr.slice(i , i+size));
//   }
//   return arr2;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));