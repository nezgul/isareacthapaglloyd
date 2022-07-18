const add = (a, b) => {
    return a + b;
};

const addOnlyPositive = (a, b) => {
    if (a <= 0 || b <= 0) {
        return "It won't work";
    }

    return a + b;
}

const divide = (a, b) => {
    return a / b;
};
