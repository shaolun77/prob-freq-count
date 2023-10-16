// Traverse through the array, checking the lengths of the decreasing subsequences.
// add whatever parameters you deem necessary

function longestFall(arr) {
    if (!arr.length) return 0;

    let longest = 1;
    let currentStreak = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            currentStreak++;
            longest = Math.max(longest, currentStreak);
        } else {
            currentStreak = 1;
        }
    }

    return longest;
}
