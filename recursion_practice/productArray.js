function productArray(array) {

    //base case is when array is empty
    if (!array.length) {
        return 1;
    }

    //shift out a value from the array, and multiply that by a function call with the mutated array

    return array.shift() * productArray(array)

}

console.log(productArray([1,2,3, 10]))