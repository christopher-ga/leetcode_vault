

//given an array of integers nums and an integer target, return indices of two numbers such that they add up to target

//assume each input has exactly one solution, don't use the same element twice
//return answer in any order

function main() {
    console.log(twoSumHashMap([1,2,3,4,5], 8))
}

const twoSumBruteForce = (array, target) => {

    //iterate across the array using a nested loop
    //one iteration grabs a number
    //other iteration checks sum of grabbed number against new number
    //if match, return nums

    //no match, return false

}


const twoSumHashMap = (array, target) => {

    //why wouldn't pointers be helpful here?

    //define storage and assign empty object
    //iterate through array
    //if the complement isn't in the hash map, store the curr num?
    //else return the curr num with the match

    const storage = {};

    for (let i = 0; i < array.length; i++) {

        let complement = target - array[i]
        if (storage[complement] !== undefined) {
            return ([storage[complement], i])
        }

        storage[array[i]] = i
    }

    return false;

}

main();