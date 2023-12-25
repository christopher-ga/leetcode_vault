
//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.


const minMax = (array) => {

    let min = array[0];
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i]

    }

    return [min, max];
}

console.log(minMax([1,2,3,4,5]))