const testArray = [1, 2, 3, 4, 5];
function sum(array) {
    if (array.length === 0) { return 0 };
    let sum = 0;
    for (let i = 0; i <= array.length; i++){
        sum += array[i];
    }
}
sum(testArray);