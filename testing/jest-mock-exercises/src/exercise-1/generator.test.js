// Ex 1: Treść zadań znajdziesz poniżej
describe('generateId', () => {
    beforeEach(() => expect.hasAssertions())

    test('should generate id with given seed', () => {
        // 1. Uzupełnij test. Zmienna `expected` jest tym co checemy uzyskać jako wynik.
        // pamiętaj o mockowaniu!
        const expected = 'id_foo-15';
    });

    test('should generate id with given empty seed', () => {
        // 2. Uzupełnij test. Zmienna `expected` jest tym co checemy uzyskać jako wynik.
        // pamiętaj o mockowaniu!
        const expected = 'id_-50';
    });
});

// [OPTIONAL]
// 3. Napisz test do `generateUuid`.
// Test powinien mockować `v4` z paczki `uuid`.
// Sprawdź w nim czy wartość z wywołania `generateUuid` wynosi `id_my-v4-uuid`