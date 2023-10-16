// Using two pointers, we'll check if the average of the pair of numbers pointed by the two pointers equals the target. 
//Move pointers accordingly to find a pair or return false.

// add whatever parameters you deem necessary


function averagePair(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const avg = (arr[start] + arr[end]) / 2;

        if (avg === target) {
            return true;
        } else if (avg < target) {
            start++;
        } else {
            end--;
        }
    }

    return false;
}

