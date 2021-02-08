// #1
// Given the array array and numbers i and j, swap elements at indexes i and j in place.

function swapArray(array, i, j) {
    if (i === j) {
        return array;
    }

    let temp = 0;

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    return array;
}

// #2
// shuffle array
// Given the array nums consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn].
// Return the array in the form [x1, y1, x2, y2, ..., xn, yn].

function shuffleArray(nums, n) {
    const first = nums.slice(0, n);
    const second = nums.slice(n);

    const res = [];

    for (let i = 0; i < n; i++) {
        res.push(first[i], second[i]);
    }

    return res;
}

// #3
// reverse array

function reverseArray(array) {
    const arrLength = array.length;

    for (let i = 0; i < arrLength / 2; i++) {
        const temp = array[i];

        array[i] = array[arrLength - 1 - i];
        array[arrLength - 1 - i] = temp;
    }

    return array;
}

// #4
// running sum
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0] … nums[i]).
// Return the running sum of nums.

function runningSum(nums) {
    return nums.reduce((acc, item, index) => {
        if (acc.length) {
            acc.push(acc[index - 1] + item);
        } else {
            acc.push(item);
        }

        return acc;
    }, []);
}

// #5
// XOR operator
// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2 * i and n === nums.length. Return the bitwise XOR of all elements of nums.

function xorOperation(n, start) {
    const arrayOfNums = [];

    for (let i = 0; i < n; i++) {
        arrayOfNums.push(start + 2 * i);
    }

    const XOR = arrayOfNums.reduce((acc, next) => acc ^ next);

    return XOR;
}

// #6
// sum up to zero

function sumZero(n) {
    if (n === 1) {
        return [0];
    }

    const res = [];

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        res.push(i, -i);
    }

    return res;
}