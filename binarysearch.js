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

let array = [-1,0,3,5,9,12];
let item = 12;
console.log(binarySearch(array, item));

// let middle = Math.floor(array.length / 2);
//
// console.log(array[middle] === item); //false, so do our checks and cut accordingly
//
// if (item > array[middle]) {
//     middle = Math.floor(middle / 2) + middle;
// } else if (item < array[middle]) {
//     middle = Math.floor(middle / 2);
// }
//
// console.log(middle);
//
// console.log(array[middle] === item)
//
// if (item > array[middle]) {
//     middle = Math.floor(middle / 2) + middle;
// } else if (item < array[middle]) {
//     middle = Math.floor(middle / 2);
// }
// console.log(middle);
// console.log(array[middle] === item)
//
// if (middle === 0 || middle === array.length) console.log(false);