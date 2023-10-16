// Compute a running total array and then use it to find the pivot index.
// add whatever parameters you deem necessary


function pivotIndex(arr) {
    const totals = new Array(arr.length).fill(0);
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        totals[i] = total;
    }

    for (let i = 0; i < arr.length; i++) {
        if (totals[i] - arr[i] === total - totals[i]) {
            return i;
        }
    }

    return -1;
}
