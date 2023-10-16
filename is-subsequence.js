// Using two pointers, move through each string checking if the characters are in order.
// add whatever parameters you deem necessary

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    if (!str1) return true;

    while (j < str2.length) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
        j++;
    }

    return false;
}
