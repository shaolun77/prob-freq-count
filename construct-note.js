// create a frequency counter for the letters and decrement the counter for every character in the message. 
//If any counter goes below zero, return false.

// add whatever parameters you deem necessary


function constructNote(message, letters) {
    const letterCount = {};

    // Construct frequency counter
    for (let char of letters) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }

    // Check if message can be constructed
    for (let char of message) {
        if (!letterCount[char] || letterCount[char] <= 0) {
            return false;
        }
        letterCount[char]--;
    }

    return true;
}
