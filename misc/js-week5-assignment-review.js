// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function decreasingRange(start, end) {
    let rangeArray = [];
    for (let i = start; i >= end; i--){
        rangeArray.push(i); // add the value to the end of the rangeArray
    }

    return rangeArray;
}

console.log(decreasingRange(0, -10)); // returns an array with a decreasing range of numbers

/**********************************/
function subtract(numberArray) {
    let difference = 0;

    for (let i = 0; i < numberArray.length; i++) {
        difference -= numberArray[i]; // subtracts the value to the variable difference
    }

    return difference;
}

console.log(subtract(decreasingRange(0, -10))); // returns the difference total of an array with a decreasing range of numbers

/**********************************/
let sampleArray = ['A', 'B', 'C'];
let sampleArray2 = ['j','o','n','a','t','h','a','n'];

function reverseArray(inputArray) {
    let outputArray = [];

    for(let i = 0; i < inputArray.length; i++){
        outputArray.unshift(inputArray[i]); // adds the value in the beginning of inputArray
    }

    return outputArray;
}

console.log(reverseArray(sampleArray)); // returns an array in reverse
console.log(reverseArray(sampleArray2)); // returns an array in reverse

function reverseArrayInPlace(inputArray) {
    let temp;

    for(let i = 0; i <= inputArray.length / 2; i++){
        temp = inputArray[i]; // holds the temporary value of the 1st item
        inputArray[i] = inputArray[inputArray.length-1-i]; // assigns the value of the 2nd item to the 1st
        inputArray[inputArray.length-1-i] = temp; // assigns the value of temp to the 2nd item
    }

    return inputArray;
}


console.log(reverseArrayInPlace(sampleArray)); // returns an array in reverse
console.log(reverseArrayInPlace(sampleArray2)); // returns an array in reverse