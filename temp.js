function toBin(num){
    if(num < 1){
        return "not valid";
    }
    let binNum = [];
    let div = num;
    while(div >= 1){
        binNum.unshift(div%2);
        div = Math.floor(div/2);
    }
    return binNum;
}

console.log("1",toBin(0));
console.log("16",toBin(16));
console.log("128",toBin(128));