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

console.log(lookNsay(1233444443));