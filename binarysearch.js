//binary search algo!

//start with an array
//start with an item to search for

//determine the middle of the array

//is our item the same as the item at the middle? if so, return true, if not :
    //is our item greater than the item at the middle? if so, half divide middle, and add to old middle
    //is our item less than the item at the middle, if so, then half middle

//do the same check again! when would you stop? when middle is either 0, or the length of the array - 1

const binarySearch = (array, item) => {

    let middle = Math.floor(array.length/2);

    while (middle !== 1 && middle !== array.length) {

        if (item === array[middle]) {
            return middle;
        } else if (item > array[middle]) {
            middle = Math.floor(middle / 2) + middle;
        } else {
            middle = Math.floor(middle/2);
        }
        console.log(middle);
    }

    return null;
}


const binarySearchCorrect = (array, item) => {

    let low = 0;
    let high = array.length - 1;

    while (low <= high) {

        let middleIndex = Math.floor((low + high) /2);

        if (array[middleIndex] === item) {
            return middleIndex;
        } else if (array[middleIndex] > item){
            //lower the bound
            high = middleIndex - 1;
        } else {
            low = middleIndex + 1;
        }

    }

    return null

}

console.log(binarySearchCorrect([1,2,3,4,5,6,7,8], 5))