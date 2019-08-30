// FreeCodeCamp Intermediate Algorithm Scripting Challenges
// https://learn.freecodecamp.org/



// #1  ****************************** Sum All Numbers in a Range ******************************

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.


// const sumAll = arr => {
//     const max = Math.max(arr[0], arr[1]);
//     const min = Math.min(arr[0], arr[1]);
//     let temp = 0;
//     for (let i = min; i <= max; i++){
//         temp += i;
//     }
//     return(temp);
// }

// console.log(sumAll([1, 4]));






// #2  ****************************** Diff Two Arrays ******************************
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.


// const diffArray = (arr1, arr2) => arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
  
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));






// #3  ****************************** Seek and Destroy ******************************
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.


// const destroyer = (arr, ...args) => arr.filter(item => !args.includes(item));

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));





// #4  ******************************  Wherefore art thou ******************************
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.


// const whatIsInAName = (collection, source) => {
//     const srcKeys = Object.keys(source);
//     return collection.filter(obj => srcKeys
//         .every(key => obj
//             .hasOwnProperty(key) && obj[key] === source[key] ));
// }


  
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));







// #5  ******************************  Spinal Tap Case ******************************
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



// const spinalCase = str => str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
   
// console.log(spinalCase('This Is Spinal Tap'));






// #6  ******************************  Pig Latin ******************************

// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.



// const translatePigLatin = str => {
//     let pigLatin = '';
//     const regex = /[aeiou]/gi;

//     if( str[0].match(regex)){
//         pigLatin = str + 'way'
//     } else if( str.match(regex) === null){
//         pigLatin = str + 'ay'
//     } else {
//         const vowelIndice = str.indexOf(str.match(regex)[0])

//         pigLatin = str.substr(vowelIndice) + str.substr(0 , vowelIndice) + 'ay';
//     }

//     return pigLatin;
// }

// console.log(translatePigLatin("consonant"));





// #7  ******************************  Search and Replace ******************************

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).



// const myReplace = (str, before, after) => {
//     const index = str.indexOf(before);

//     if(str[index] === str[index].toUpperCase()){
//         after = after.charAt(0).toUpperCase() + after.slice(1);
//     }

//     str = str.replace(before, after)

//     return str;
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));






// #7  ******************************  DNA Pairing ******************************
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


// function pairElement(str) {
//     //create object for pair lookup
//     var pairs = {
//       "A": "T",
//       "T": "A",
//       "C": "G",
//       "G": "C"
//     }
//     //split string into array of characters
//     var arr = str.split("");
//     //map character to array of character and matching pair
//     return arr.map(x => [x,pairs[x]]);
// }

// const pairElement = str => {
//     const pairs = {
//         "A": "T",
//         "T": "A",
//         "C": "G",
//         "G": "C" 
//     }

//     return str.split('').map(x => [x,pairs[x]])

// }

// console.log(pairElement("GCG"));