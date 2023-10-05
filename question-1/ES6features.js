const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length > 0) {
            let newArray = arr.filter(item => typeof item === 'string').map(item => item.toLowerCase());
            resolve(newArray);
        } else {
            reject('Array is empty');
        }
    });
}