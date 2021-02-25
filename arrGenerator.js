// write a function that takes an array length as parameter and returns a random sorted array

const maxRange = 10;

function generator(length){
    let arr = [];
    arr.push(Math.ceil(Math.random() * maxRange));
    for(var i=1; i<length; i++) {
        arr.push(Math.ceil(Math.random() * maxRange) + arr[i-1])
    }
    return arr
}

module.exports = generator;