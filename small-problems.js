//////////  PROBLEM 1  ///////////
// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number
function fizzBuzz(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] %3 === 0){
            console.log("Fizz");
        } else if(array[i] %5 === 0){
            console.log("Buzz");
        } else if(array[i] %15 === 0){
            console.log("Fizz Buzz");
        } else {
            console.log(array[i]);
        }
    }
}

//////////  PROBLEM 2  ///////////
// Write code to return the number of vowels in `str`
function numOfVowels(str){
    let vowels = ['a','e','i','o','u'];
    let vowelsCount = 0;
    for(let i=0; i<str.length; i++){
        if(vowels.indexOf(str[i]) !== -1){
            vowelsCount++;
        }
    }
    return vowelsCount;
}

//////////  PROBLEM 3  ///////////
// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
function isPalindrome(str){
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr){
        return true;
    } else {
        return false;
    }
}

//////////  PROBLEM 4  ///////////
// Write code to create a function that returns the factorial of `num`
function factorial(num){
    let factorial = 1;
    if(num > 0) {
        for(let i=num; i>0; i--){
            factorial = factorial * i;
        }
    }
    return factorial;
}

//////////  PROBLEM 5  ///////////
// Write code to create a function that takes a string and returns a new string with the first letters of each word capitalized
function titleCap(str){
    let result = [];
    let words = str.toLowerCase().split(" ");
    for(let i=0; i<words.length; i++){
        let word = words[i].split("");
        word[0] = word[0].toUpperCase();
        result.push(word.join(""));
    }
    return result.join(" ");
}

//////////  PROBLEM 6  ///////////
// Write code to create a function that takes a string and returns the string with all of the letter cases swapped
function swapLetterCase(str){
    let strArray = str.split("");
    for(let i=0; i<strArray.length; i++){
        if(strArray[i] === strArray[i].toUpperCase()){
            strArray[i] = strArray[i].toLowerCase();
        } else {
            strArray[i] = strArray[i].toUpperCase();
        }
    }
    return strArray.join("");
}

//////////  PROBLEM 7  ///////////
// Write code to create a function that accepts a string (`str`) and returns the longest word in the string
function longestWord(str){
    
    let words = str.split(" ");
    let longest = words[0];
    for(let i=1; i<words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest;
}
//test
// var test = "this is a very looooong string";
// var result = longestWord(test);
// console.log(result);
//////////  PROBLEM 8  ///////////
// Write code to create a function that accepts a string and returns an acronym for the given string
function acronym(str){
    let acro = "";
    let words = str.split(" ");
    for(let i=0; i<words.length; i++){
        let wordLetters = words[i].split("");
        acro += wordLetters[0].toUpperCase();
    }
    return acro;
}

//test
// var test = "united arab emirates";
// var result = acronym(test);
// console.log(result);

//////////  PROBLEM 9  ///////////
// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string
function reverseString(str){
    let reverse = [];
    let words = str.split(" ");
    for(let i = words.length -1; i>=0; i--){
        reverse.push(words[i]);
    }
    return reverse.join(" ");
}

//test
// var test = "united arab emirates";
// var result = reverseString(test);
// console.log(result);

//////////  PROBLEM 10  ///////////
// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method
function reverseArray(arr){
    let halfArr = Math.floor(arr.length/2);
    let j = arr.length -1;
    for(let i=0; i<halfArr; i++) {
        var temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr;
}

//test
// var test1 = [1,2,3,4,5,6,7,8];
// var test2 = [1,2,3,4,5,6,7];
// var test3 = [1];
// var test4 = [];
// var result1 = reverseArray(test1);
// var result2 = reverseArray(test2);
// var result3 = reverseArray(test3);
// var result4 = reverseArray(test4);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);


//////////  PROBLEM 11  ///////////
//There is a large pile of socks that must be paired by color. 
//Given an array of integers representing the color of each sock, 
//determine how many pairs of socks with matching colors there are.
// example: input is [1,1,3,2,1,2,5,1,7,7] output is: 4 //2 pairs of color1 + 1 pair pf color2 + 1 pair of color7  

function sockMerchant(ar) {
    let pairs = 0;
    ar.sort();
    for(let i=0; i<ar.length; i++){
        if(ar[i] === ar[i+1]){
            pairs++;
            i++;
        }
    }
    return pairs;
}

//////////  PROBLEM 12  ///////////
// Write code to create a function that accepts a number (`n`) 
// and returns a new number that satisfies the look-and-say-sequence
// The look and say sequence can be understood by reading a number out loud, 
// digit by digit, but first saying the number of times each digit appears in a row.
//     - For example, given the following number:
//     var n = 5442;
//     - There is **one** five, **two** fours, and **one** two. 
//      So the look-say-sequence of `n` should be `152412`.
function lookNsay(n){
    let nString = ""+n;
    
    let currentBit = nString[0];
    let currentCount = 1;
    let result = "";
    
    for(let i=1; i<=nString.length; i++){
        if(currentBit === nString[i]) {
            currentCount++;
        } else {
            result += currentCount;
            result += currentBit;
            currentBit = nString[i];
            currentCount = 1;
        }
    }
    return result;
}

//console.log(lookNsay(1233444443));

//////////  PROBLEM 13  ///////////
// Write code to create a function that accepts a string and returns the character that appears the maximum number of times in the string. If there is a tie in the maximum number of times a character appears in the string, return the character that appears first in the string.

var maxCharacterCount = function(str) {
    var charMap = {};
  
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char in charMap) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
    let max = 1;
    let firstKey = str[0];
    for(const key in charMap){
        if(charMap[key]>max){
            max = charMap[key];
            firstKey = key;
        }
    }
    return firstKey;
};

// let result = characterCount("Hello World");
// console.log(result);

//////////  PROBLEM 14  ///////////
// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {

    let max = arr[0];
    let secondMax = null;
    if(arr.length < 2) {
        return null;
    } else {
        for(let i=1; i<arr.length; i++){
            if(arr[i]>max){
                secondMax = max;
                max = arr[i];
            } else if(arr[i]>secondMax || secondMax === null){
                secondMax = arr[i];
            }
        }
        return max * secondMax;
    }
};

// console.log([]);
// console.log([5]);
// console.log([5,3]);
// console.log([5,-3]);


/////////// PROBLEM 15 //////////////
// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    let result = "";
    str = str.trim().toLowerCase();
    for(let i=0; i<str.length; i++){
        if(str[i] !== " "){
            result += str[i];
        } else {
            result += str[i+1].toUpperCase();
            i++;
        }
    }
    return result;
};

//v2 - problem 15
var camelCase = function(str) {
    var result = "";
    var words = str.toLowerCase().split(" ");
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split("");
  
      if (i > 0) {
        letters[0] = letters[0].toUpperCase();
      }
  
      result += letters.join("");
    }
  
    return result;
  };

//////////  PROBLEM 16  ///////////
// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

//v1 - big(O)=(n^2)
var isUnique = function(arr) {
    for(let i=0; i<arr.length; i++){
        let current = arr[i];
        for(let j=i+1; j<arr.length; j++){
            if(current === arr[j]){
                return false;
            }
        }
    }
    return true;
};

//v2 - using map to reduce big(O) to (n)
var isUnique2 = function(arr) {
    let mapNum = {};
    for(let i=0; i<arr.length; i++){
        let current = arr[i];
        if(mapNum[current] === true){
            return false;
        } else {
            mapNum[current] = true;
        }
    }
    return true;

}

//////////  PROBLEM 17  ///////////
// Write code to create a function that accepts two strings
// Return true if the strings are anagrams(contain the same collection of characters) of each other, otherwise return false

var isAnagram = function(strA, strB) {
    if(strA.length !== strB.length){
        return false;
    }
    let aLetters = {};
    let bLetters = {};
    for(let i=0; i<strB.length; i++){
        if(aLetters[strA[i]]){
            aLetters[strA[i]]++;
        } else {
            aLetters[strA[i]] = 1;
        }
        if(bLetters[strB[i]]){
            bLetters[strB[i]]++;
        } else {
            bLetters[strB[i]] = 1;
        }
    }
    for(let key in aLetters){
        if(aLetters[key] !== bLetters[key]){
            return false;
        }
    }
    return true;
};


/////////   PROBLEM 18  //////////
// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

//V1
var mostSongsInPlaylist = function(arr) {
    // add your code here...
    let sorted = arr.sort();
    let sum = 0;
    for(let i=0; i<arr.length; i++){
      sum += arr[i];
      if(sum > 60){
        return i;
      }
    }
    return arr.length;
  };

//V2
var mostSongsInPlaylist = function(arr) {
    var sortedArr = arr.sort();
    var totalMins = 0;
    var totalSongs = 0;
  
    for (var i = 0; i < sortedArr.length; i++) {
      var currentSongDuration = sortedArr[i];
  
      if (totalMins + currentSongDuration <= 60) {
        totalMins += currentSongDuration;
        totalSongs++;
      } else {
        return totalSongs;
      }
    }
  
    return totalSongs;
  };
  

  ////////////   PROBLEM 19   //////////
  // Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    var i = 0;
  
    while (true) {
      var currentSquare = i * i;
  
      if (currentSquare === num) {
        return true;
      } else if (currentSquare > num) {
        return false;
      } else {
        i++;
      }
    }
  };
  

////////////   PROBLEM 20   //////////
// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array can be multiplied into 20, return true, else return false

var multiplyInto20 = function(arr) {
    var numMap = {};
  
    for (var i = 0; i < arr.length; i++) {
      var currentNum = arr[i];
  
      var neededNumber = 20 / currentNum;
  
      if (numMap[neededNumber]) {
        return true;
      } else {
        numMap[currentNum] = true;
      }
    }
  
    return false;
  };
  

////////////    PROBLEM 21  ///////////
// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    let result = [];
    let j=0;
    let current = arr2[j];
    for(let i=0; i<arr1.length; i++){
        //when arr2[j] === undefined it means j is >= arr2.length, so we just add the rest of arr1 to result
        if(arr2[j] >= arr1[i] || arr2[j] === undefined){
            result.push(arr1[i]);
        } else {
            result.push(arr2[j]);
                j++;
                i--;
        }      
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
};

//V2
// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    var result = [];
  
    var idx1 = 0;
    var idx2 = 0;
  
    while (idx1 < arr1.length && idx2 < arr2.length) {
      var num1 = arr1[idx1];
      var num2 = arr2[idx2];
  
      if (num1 < num2) {
        result.push(num1);
        idx1++;
      } else {
        result.push(num2);
        idx2++;
      }
    }
  
    while (idx1 < arr1.length) {
      var num1 = arr1[idx1];
      result.push(num1);
      idx1++;
    }
  
    while (idx2 < arr2.length) {
      var num2 = arr2[idx2];
      result.push(num2);
      idx2++;
    }
  
    return result;
  };

  ///////////   PROBLEM 22  ///////////
  // Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    var elements = {};
  
    for (var i = 0; i < arrA.length; i++) {
      var num = arrA[i];
      elements[num] = true;
    }
  
    for (var i = 0; i < arrB.length; i++) {
      var num = arrB[i];
  
      if (elements[num] === true) {
        return num;
      }
    }
  };
  
  //V2 -using a Set data structure
  
  var commonElement = function(arrA, arrB) {
    var elements = new Set();
  
    for (var i = 0; i < arrA.length; i++) {
      var num = arrA[i];
      elements.add(num);
    }
  
    for (var i = 0; i < arrB.length; i++) {
      var num = arrB[i];
  
      if (elements.has(num)) {
        return num;
      }
    }
  };
  
  //V3 -nested for-loop bigO(n^2)
  var commonElement = function(arrA, arrB) {
    let match;
    for(let i=0; i<arrA.length; i++){
       for(let j=0; j<arrB.length; j++){
           if(arrA[i] === arrB[j]){
               match = arrB[j];
               break;
           }
       }
    }
    return match;
};

////////////    PROBLEM 23  ////////////
//Picking Tickets
/*
Consider an array of n ticket prices, tickets. A number, m, is defined as the size of some subsequence, s, of tickets where each element covers an unbroken range of integers. Tha is to say, if you were to sort the elements in s, the absolute difference between any elements j and j+1 would be either 0 or 1. Determine the maximum length of a subsequence chosen from the tickets array.

Example: tickets = [8,5,4,8,4] -> sorted: [4,4,5,8,8] -> subsequences: [4,4,5] and [8,8] lengths: 3,2
The function should return: 3
case 0: input[4,13,2,3] -> output[3]
case 1: input[1,3,12]   -> output[1]
*/
function maxTickets(tickets) {
    if(tickets.length > 1){
        let counter = 1;
        let sorted = tickets.sort();
        let subTickets = [];
        
        for(let i=1; i<sorted.length; i++){
            let dif = sorted[i] - sorted[i-1];
            if(dif === 0 || dif === 1){
                counter++;
            } else {
                subTickets.push(counter);
                counter = 1;
            }
            if(i === (sorted.length -1)){
                subTickets.push(counter);
            }
        }
        let max =1;
        for(let j=0; j<subTickets.length; j++){
            if(subTickets[j]>max){
                max = subTickets[j];
            }
        }
        return max;
    } else if( tickets.length === 1){
        return 1;
    } else if(tickets.length === undefined){
        return 0;
    }
}

////////////    PROBLEM 24  ////////////
//TOOL LIST
/*
A milling machine in a manufacturing facility has a tool change system. The tool changer holds n tools and some duplicate tools may be included. the operator must move through the tools one at a time, either moving left or right. The tool changer is circular, so when the last tool in the tools array is reached in either direction, the next tools is at the other end of the array.

Given the name of the next tool needed, determine the minimum number of left or right moves to reach it.

Example:
tools = ["ballendmill", "keywaycutter", "slotdrill", "facemill"]
startIndex = 1
target = "ballendmill"
the pointer is standing at "keywaycutter" (location 1). to reach the target (location 0) there are two ways:
right: 3 steps, left: 1 step
minimum is 1
output: 1
*/
function toolChanger(tools, startIndex, target){
    //moving left
    let leftCounter = 1;
    let i = startIndex -1;
    if(i < 0){
        i = tools.length -1;
    } else {
        while(tools[i] !== target){
            leftCounter++;
            i--;
            if(i < 0){
                i = tools.length -1;
            }
        }
    }
    //moving right
    let rightCounter = 1;
    let j = startIndex +1;
    if(j >= tools.length){
        j = 0;
    } else {
        while(tools[j] !== target){
            rightCounter++;
            j++;
            if(j >= tools.length){
                j = 0;
            }
        }
    }

    //return minimum
    if(rightCounter < leftCounter){
        return rightCounter;
    } else {
        return leftCounter;
    }
}


////////    PROBLEM 25  /////////
//Counting Valleys
//Given a string of U's(Up) and D's(Down) representing a hiking-trail(path) that starts at sea-level and ends at sea-level. Count the number of valleys in that trail
/*
Example:
input (steps: 8, path: "UDDDUDUU")
output: 1
UD (hill)- DDUDUU(valley)
*/

function countingValleys(steps, path) {
    // Write your code here
    let alt = 0;
    let numOfValleys = 0;
    for(let i=0; i< steps; i++){
       if(path[i] === 'D'){
           alt -=1;
       } else if(path[i] === 'U'){
           alt += 1;
       }
       if(alt === 0 && path[i] === 'U'){
           numOfValleys++;
       }
    }
    return numOfValleys;
}

////////    PROBLEM 26   //////////
//Given an array of 0's and 1's. Return the minimum number of jumps needed to reach the end of the array.
//Each jump can be current position+1 or +2
//Only 0's are safe spots to jump on
//There will always be a way to reach the end
/*
Example1:
Input = [0,0,0,0,1,0]
output = 3
Example2:
Input = [0,0,1,0,0,1,0]
Output = 4
*/
function jumpingOnClouds(c) {
    let jumps = 0;
    for(let i=0; i<c.length; i++){
        if( i>0 ){
            jumps++;
        }
        if((i+2) < c.length && c[i+2] === 0){
            i++;
        }
        
    }
    return jumps;
}

////////    PROBLEM 26   //////////
//There is a string, s (input), of lowercase English letters that is repeated infinitely many times. Given an integer, n (input), find and print the number of letter a's in the first n letters of the infinite string.
/*
Example: s = 'abcac'
n = 10
find number of a's in abcacabcac
Output = 4
*/

function repeatedString(s, n) {
    let sArray = s.split("");
    //number of a's in s
    let aCountIn_s = 0;
    for(let i=0; i<sArray.length; i++){
        if(sArray[i] === 'a'){
            aCountIn_s++;
        }
    }
    //number of repeated s's in n
    let sCount = Math.floor(n/s.length);
    //number of a's in the reminder of n
    let rem = n % sArray.length;
    let remS = sArray.splice(0,rem);
    let remSCount = 0;
    for(let i=0; i<remS.length; i++){
        if(remS[i] === 'a'){
            remSCount++;
        }
    }
    return (aCountIn_s * sCount + remSCount)
}
