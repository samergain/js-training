// linear search

function linearSearch(arr, target){
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] === target) {
            return arr[i];
        }
    }
    return -1;
}