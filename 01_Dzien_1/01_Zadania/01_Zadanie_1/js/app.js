const numbers = [4, 12, 23, 76, 4];

Array.prototype.fsbReduce = function (fn, initialValue) {
    if (typeof fn !== 'function') {
        throw new Error('this is not a function');
    }

    let accumulator = initialValue ?? this[0];
    const start = initialValue ? 0 : 1;
    for (let i = start; i < this.length; i++) {
        accumulator = fn(accumulator, this[i]);
    }
    return accumulator;
};

console.log(
    numbers.fsbReduce(function (acc, curr) {
        return acc + curr;
    })
);

console.log(
    numbers.fsbReduce(function (acc, curr) {
        return acc * curr;
    })
);