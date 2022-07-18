// Jest błąd w kodzie - na podstawie testów postaraj się go odnaleźć.

const shouldReturnOneForFactorialFromOne = () => {
  const expected = 1;

  const actual = factorial(1);

  if (actual === expected) {
    console.log('✅ calculating factorial from 1 works');
  } else {
    throw new Error('Expected 1');
  }
};

const assert = (actual, expected, testName) => {
  if (actual == expected) {
    console.log(`✅ ${testName}`);
  } else {
    console.log(`🔴 ${testName}`);
    throw new Error(
      `${testName} failed. Expected "${actual}" to be "${expected}"`
    );
  }
};

const shouldReturnOneForFactorialFromZero = () => {
  const expected = 1;

  const actual = factorial(0);

  assert(actual, expected, 'calculating factorial for 0');
};

const shouldReturnNanForStringInput = () => {
  const actual = factorial('some string');

  if (isNaN(actual)) {
    console.log(`✅ calculating factorial for string input`);
  } else {
    console.log(`🔴 calculating factorial for string input`);
    throw new Error(`calculating factorial for string input failed. Expected "${actual}" to be "NaN"`);
  }
};

const shouldReturnNanForFactorialFromNegativeValue = () => {
  const actual = factorial(-10);

  if (isNaN(actual)) {
    console.log(`✅ calculating factorial for negative value');`);
  } else {
    console.log(`🔴 calculating factorial for negative value');`);
    throw new Error(`calculating factorial for negative value failed. Expected "${actual}" to be "NaN"`);
  }
};

shouldReturnOneForFactorialFromOne();
shouldReturnOneForFactorialFromZero();
shouldReturnNanForStringInput();
shouldReturnNanForFactorialFromNegativeValue();
