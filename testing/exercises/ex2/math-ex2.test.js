// EX 2. Let's write some tests with basic test runner!
// Write tests for `factorial` and `multiplyOneHaveBePositiveAndNonZero` functions

// test suite
describe('add', () => {
    test('should return positive if both are positive', () => {
        const actual = add(1, 2);

        if (actual === 3) {
            return;
        } else {
            throw new Error('Assertion failed!, Should be 3');
        }
    });

    test('should return negative if both are negative', () => {
        const actual = add(-1, -5);

        if (actual === -6) {
            return;
        } else {
            throw new Error('Assertion failed!, Should be -6');
        }
    });

});


describe('factorial', () => {

});

describe('multiplyOneHaveBePositiveAndNonZero', () => {

});
