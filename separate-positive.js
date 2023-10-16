// Using the two-pointer approach, we can push positives to the left and negatives to the right. 
// Start one pointer at the beginning and one at the end, and swap as needed.

// add whatever parameters you deem necessary

function separatePositive(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] < 0 && arr[end] > 0) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        } else if (arr[start] > 0) {
            start++;
        } else {
            end--;
        }
    }
    return arr;
}
