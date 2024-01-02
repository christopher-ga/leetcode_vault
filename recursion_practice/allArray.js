function allArray(array, callback) {

    if (!array.length) {
        return true;
    }

    if (!callback(array[0])) {
        return false;
    }
    array.shift();

    return allArray(array, callback);



}

console.log(allArray([1,5,3], (num) => {
    return num < 10
}))