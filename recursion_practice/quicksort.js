function quicksort(array) {

    if (array.length <= 1) {
        return array
    }

    let pivot = array[0];

    let subArrayL = [];
    let subArrayR = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > pivot) {
            subArrayR.push(array[i]);
        } else subArrayL.push(array[i]);
    }

    let left = quicksort(subArrayL);
    let right = quicksort(subArrayR);

    left.push(pivot);

    return left.concat(right);


}

console.log(quicksort([8, 10, 9, 1, 13, 7]))