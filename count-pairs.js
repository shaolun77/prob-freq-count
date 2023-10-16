// If the array is sorted, we can use a two-pointer technique. If not, use a hashmap to track complements.
// add whatever parameters you deem necessary

function countPairs(arr, sum) {
    let count = 0;
    const seen = {};

    for (let num of arr) {
        if (seen[sum - num]) {
            count++;
        }
        seen[num] = (seen[num] || 0) + 1;
    }

    return count;
}

