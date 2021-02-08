// #1
// search insert position
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

function searchInsert(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    nums.push(target);

    return nums.sort((a, b) => a - b).indexOf(target);
}

// #2
// count negative numbers
//Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.
// Return the number of negative numbers in grid.

function countNegatives(grid) {
    let count = 0;

    for (const row of grid) {
        for (let k = row.length; k >= 0; k--) {
            if (row[k] < 0) {
                count++;
            } else {
                continue;
            }
        }
    }

    return count;
}

// #3
// Given an integer array arr that is guaranteed to be a mountain,
// return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

function peakIndexInMountainArray(arr) {
    return arr.findIndex((item, index, array) => {
        return array[index - 1] < item && item > array[index + 1];
    });
}

// #4
// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated,
// and only the integer part of the result is returned.

function sqrt(x) {
    if (x === 0 || x === 1) {
        return x;
    }

    let i = 1;
    let result = 1;

    while (result <= x) {
        i += 1;
        result = i * i;
    }

    return i - 1;
}