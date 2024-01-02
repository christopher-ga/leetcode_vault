const selection_sort = (a) => {

    for (let i = 0; i < a.length; i++) {

        let minIndex = i;
        let prevIndex = i;
        let prevValue = a[i]

        for (let j = i; j < a.length; j++) {

            if (a[prevIndex] > a[j]) {
                minIndex = j;
            }

        }

        a[prevIndex] = a[minIndex];
        a[minIndex] = prevValue;
    }

    return a;
}

console.log(selection_sort([5,2,9,6]))
