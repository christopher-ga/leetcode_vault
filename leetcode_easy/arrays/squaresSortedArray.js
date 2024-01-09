const squaresSortedArray = (array) => {
    // Given an integer array nums sorted in non-decreasing order,
    // return an array of the squares of each number sorted in non-decreasing order.

    //so we know the numbers are sorted in an increasing order

    //can either square than use a sorting algo, or we can just sort in place using pointers

    //define pointers
    let leftP =  0;
    let rightP = array.length - 1;


    const storage = Array(array.length)
    let storageIndex = storage.length - 1;

    console.log(storage);

    //while leftP does not equal rightP
    while(leftP <= rightP) {
        console.log(leftP, rightP);

        if (Math.abs(array[leftP]) > Math.abs(array[rightP])) {
            storage[storageIndex] = array[leftP] * array[leftP];
            leftP++;
        } else {

            storage[storageIndex] = array[rightP] * array[rightP];

            rightP--
        }
        storageIndex--;
    }

    return storage;

}

console.log(squaresSortedArray([-3,-2,4,9]));