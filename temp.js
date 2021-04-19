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
function findGaps(number){
    let binned = toBin(number);
    console.log(binned)
    let gaps = [];
    let isGap = false;
    let gapSize = 0;
    for(let i=0; i<binned.length; i++){
        if(binned[i] === 0 && binned[i-1] === 1){
            isGap = true;
            gapSize = 1;
            continue;
        }
        if(binned[i] === 0 && isGap === true){
            gapSize++;
        }
        if(binned[i] === 1 && isGap === true){
            isGap = false;
            gaps.push(gapSize);
            gapSize = 0;
        }
    }
    return Math.max(...gaps);
}

console.log(findGaps(177))