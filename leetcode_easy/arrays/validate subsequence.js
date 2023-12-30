/*Problem Statement: Validate Subsequence
Given two non-empty arrays of integers, write a function to determine if the second array is a subsequence of the first one.

    Definitions:
Array: An array is a sequence of elements.
    Subsequence: A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
*/
const validateSubsequence = (arr, subarr) => {

    let indexStorage = [];

    for (let i = 0; i < subarr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (subarr[i] === arr[j]) {
                indexStorage.push(j);
            }

        }
    }

    for (let i = 0; i < indexStorage.length - 1; i++){
        let nums = indexStorage[i];
        let next = indexStorage[i + 1];

        if (nums > next) return false

    }

    return true;

}

const validateSubequenceOptimal = (arr, sub) => {

    let arrIndex = 0;
    let subIndex = 0;

    while (arrIndex < arr.length) {

        let arrPointer = arr[arrIndex];
        let subPointer = sub[subIndex];


        if (arrPointer === subPointer) {
            console.log('pointers are equal')
            subIndex++
        }

        arrIndex++
    }

    console.log(subIndex, arrIndex);

    return subIndex === sub.length;


}
console.log(validateSubequenceOptimal([1,2,3,4,-1], [1,-1]));


