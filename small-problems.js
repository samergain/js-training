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