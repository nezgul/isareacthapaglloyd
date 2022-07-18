// EX 1. Let's write some tests!
//
// EX 1.1: Write tests for other math.js functions
//  a) addOnlyPositive
//  b) divide
//
// EX 1.2: Take a look at below points and add tests for those cases. 
//
//  a) Take a look if divide works correct. Can we always divide? (#basic-math)
//  b) What about `add` - how does it behave with non-number inputs?
//
//  Change implementation of those functions in `math.js` file - to fix it :) 
{
    console.log('=== ⤵️ tests for `add` ⤵️ ====');

    function shouldReturnPositiveIfBothArePositive() {
        const actual = add(1, 2);

        if (actual === 3) {
            console.log('✅ shouldReturnPositiveIfBothArePositive');
        } else {
            throw new Error('Assertion failed!, Should be 3');
        }
    }

    function shouldReturnNegativeIfBothAreNegative() {
        const actual = add(-1, -5);

        if (actual === -6) {
            console.log('✅ shouldReturnNegativeIfBothAreNegative');
        } else {
            throw new Error('Assertion failed!, Should be -6');
        }
    }

    shouldReturnPositiveIfBothArePositive();
    shouldReturnNegativeIfBothAreNegative();
}

{
    console.log('=== ⤵️ tests for `addOnlyPositive` ️⤵️ ====');
    
    
    // should return summed values for both positive
    // 2, 3 => 5

    // should return Wont Work Message for first value negative
    // -2, 3 => "It won't work"


}

{
    // test `divide` method
    console.log('=== ⤵️ tests for `divide` ⤵️ ====');

}