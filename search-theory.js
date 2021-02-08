// linear search
// good solution for sorted array
// O(n)

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([2, 4, 5, 90, 5], 5));

// binary search
// good solution for sorted array
// O(log n)

function binarySearch(array, target) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        const mid = Math.round((max + min) / 2);

        if (array[mid] === target) {
            return mid;
        }

        if (array[mid] > target) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return -1;

}

// interpolation search

function interpolationSearch(array, target) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        const mid = Math.round(min + (max - min) / (array[max] - array[min]) * (target - array[min]));

        if (array[mid] === target) {
            return mid;
        }

        if (array[mid] > target) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return -1;

}