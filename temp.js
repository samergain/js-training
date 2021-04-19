function minInt(A){
    let x=0;
    let found = false;
    for(var i=0; i<A.length; i++){
        x++;
        for(var j=0; j<A.length; j++){
            if(A[j] === x){
                found = true;
            }
        }
        if(found === false){
            return x;
        } else {
            found = false;
        }
    }
    return x+1;
}

let f = [];
let g = [-1,-3];
let h = [1,2,3];
let k = [4,-3,3,-9,2,1];
let l = [1, 3, 6, 4, 1, 2];
console.log(minInt(f));
console.log(minInt(g));
console.log(minInt(h));
console.log(minInt(k));
console.log(minInt(l));