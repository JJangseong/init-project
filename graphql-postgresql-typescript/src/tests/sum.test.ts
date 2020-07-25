const sum = (a, b) => a + b;

test('더하기 테스트', () => {
    expect(sum(1,5)).toBe(6);
})