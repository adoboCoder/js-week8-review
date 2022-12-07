// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function negativeRange(start, end) {
    let rangeArray = [];
    for (let i = start; i >= end; i--){
        rangeArray.push(i);
    }
    return rangeArray;
}

console.log(negativeRange(0, -10));

function subtract(numberArray) {
    let difference = 0;

    for (let i = 0; i < numberArray.length; i++) {
        difference -= numberArray[i];
    }

    return difference;
}

console.log(subtract(negativeRange(0, -10)));

/**********************************/
let sampleArray = ['A', 'B', 'C'];
let sampleArray2 = ['j','o','n','a','t','h','a','n'];

function reverseArray(inputArray) {
    let outputArray = [];

    for(let i = 0; i < inputArray.length; i++){
        outputArray.unshift(inputArray[i]);
    }

    return outputArray;
}

console.log(reverseArray(sampleArray));
console.log(reverseArray(sampleArray2));

function reverseArrayInPlace(inputArray) {
    let temp;

    for(let i = 0; i <= inputArray.length / 2; i++){
        temp = inputArray[i];
        inputArray[i] = inputArray[inputArray.length-1-i];
        inputArray[inputArray.length-1-i] = temp;
    }

    return inputArray;
}


console.log(reverseArrayInPlace(sampleArray));
console.log(reverseArrayInPlace(sampleArray2));