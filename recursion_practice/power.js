function power(base, exponet) {
    //base case
    if (exponet === 0) {
        return 1;
    }

    return power(base, exponet -1) * base;
}

console.log(power(3, 3));