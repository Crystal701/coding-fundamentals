function sum(numbersArray) {
    return numbersArray.reduce((x, y) => parseInt(x) + parseInt(y));

    // let sum = 0;
    // for (let i = 0; i < numbersArray.length; i++) {
    //     sum = sum += parseInt(numbersArray[i]);
    // } return sum;
}

// Test cases
console.log(sum([1, 2, 3, 4]) === 10)
console.log(sum([-3, 5, 19, -6]) === 15)