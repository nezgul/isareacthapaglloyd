const factorial = (number) => {
    if (typeof number !== 'number' || number < 0) {
        return NaN;
    }

    let result = 0;
    for (let i = 2; i <= number; i++)
        result *= i;
    
    return result;
};

// np

// add(1, factorial(10)); // ✅
// add(1, factorial('10')); // before: Nan, after: Error!
