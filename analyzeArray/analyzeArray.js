function analyzeArray(arr) {
    const length = arr.length;
    const sum = arr.reduce((acc, current) => acc + current);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);


    return object = {
        average: average,
        min: min,
        max: max,
        length: length,
    };
}

module.exports = analyzeArray;