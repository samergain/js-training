// binary search

function binarySearch(array, target) {
    let currentIndex;
    let currentNum;
    let minIndex = 0;
    let maxIndex = array.length -1;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) /2 );
        currentNum = array[currentIndex];
        if(currentNum < target){
            minIndex = currentIndex +1;
        } else if (currentNum > target) {
            maxIndex = currentIndex -1;
        } else {
            //target found
            return currentIndex;
        }
    }
    return -1;
}