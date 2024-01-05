function sumRange(range) {

    //base case
    if (range === 1) {
        return 1;
    } else return sumRange(range - 1) + range;

}
//
console.log(sumRange(3));