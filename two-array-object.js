// Iterating through the keys array, assign corresponding values, if available. If no value is available, assign null.
// add whatever parameters you deem necessary

function twoArrayObject(keys, values) {
    const obj = {};

    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i] !== undefined ? values[i] : null;
    }

    return obj;
}
