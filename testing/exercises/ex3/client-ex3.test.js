// EX 3. Let's write some tests for class methods
//  a) `calculateDiscount` needs some tests - please write them. Notice the `ClientService` construtor!
//  b) Something is missing for `getNextOrderNumber`. What will happened if client does not have any order as undefined 🙀
//     Write a test which verifies how it should behave, and then fix it in implementation!
//  c) New requirements arrived! Now if client type is `INTERNAL` he has extra +15% discount! (sums up with existing discounts)
//      Write test first, and then add implementation with this logic in `calculateDiscount` method
//  d) Let's write 2-3 basic tests for `calculateNewOrderValue`

describe('getNextOrderNumber', () => {
  test('should return correct first order number', () => {
    // arrange
    const service = new ClientService();
    const client = {
      orders: [],
    };

    const expected = 'ISA-#1';

    // act
    const actual = service.getNextOrderNumber(client);

    // assert
    if (actual === expected) {
      return;
    } else {
      throw new Error(
        `Assertion failed! Actual="${actual}", where should be "${expected}"`
      );
    }
  });

  test('should return correct n-th order number', () => {
    // arrange
    const service = new ClientService();
    const client = {
      orders: [123, 456, 984],
    };

    const expected = 'ISA-#4';

    // act
    const actual = service.getNextOrderNumber(client);

    // assert
    if (actual === expected) {
      return;
    } else {
      throw new Error(
        `Assertion failed! Actual="${actual}", where should be "${expected}"`
      );
    }
  });
});

describe('calculateDiscount', () => {
  test('should return 10% discount if orders exceeded 500', () => {
    // arrange
    const service = new ClientService();
    const client = {
      orders: [100, 401],
    };

    const expected = 0.1;

    // act
    const actual = service.calculateDiscount(client);

    // assert
    if (actual === expected) {
        return;
      } else {
        throw new Error(
          `Assertion failed! Actual="${actual}", where should be "${expected}"`
        );
      }
  });

  test('should return no discount if orders value is less then 500', () => {
    // arrange
    const service = new ClientService();
    const client = {
      orders: [100, 100, 100],
    };

    const expected = 0;

    // act
    const actual = service.calculateDiscount(client);

    // assert
    if (actual === expected) {
        return;
      } else {
        throw new Error(
          `Assertion failed! Actual="${actual}", where should be "${expected}"`
        );
      }
  });

  test('should 15% discount if client is internal', () => {
    // arrange
    const service = new ClientService();
    const client = {
      type: 'INTERNAL',
      orders: [100, 100, 100],
    };

    const expected = 0.15;

    // act
    const actual = service.calculateDiscount(client);

    // assert
    if (actual === expected) {
        return;
      } else {
        throw new Error(
          `Assertion failed! Actual="${actual}", where should be "${expected}"`
        );
      }
  });

  test('should return 25% discount if client is internal and spent more than 500', () => {
    // arrange
    const service = new ClientService();
    const client = {
      type: 'INTERNAL',
      orders: [100, 401],
    };

    const expected = 0.25;

    // act
    const actual = service.calculateDiscount(client);

    // assert
    if (actual === expected) {
        return;
      } else {
        throw new Error(
          `Assertion failed! Actual="${actual}", where should be "${expected}"`
        );
      }
  });
});
