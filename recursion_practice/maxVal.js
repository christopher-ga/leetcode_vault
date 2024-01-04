function maxVal(arr, max) {

    max = arr.shift();

    if (!arr.length) {
        return max;
    }

    if (max < arr[0]) {
        max = arr[0];
    }

    maxVal(arr, max);
    return max;
}

console.log(maxVal([1,2,9,3,4,5,6]))