function fibonacci(x) {

    if (isNaN(x) || x < 0) {
        return "OOPS"
    }
    if (x == 0) {
        return 0;
    }
    if (x == 1) {
        return 1;
    }
    return (fibonacci(x-1) + fibonacci(x-2));
};

console.log(fibonacci("Eren"));

// Do not edit below this line
module.exports = fibonacci;
