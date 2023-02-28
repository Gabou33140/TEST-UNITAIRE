
const yahtzee = require('./yahtzee');

test('Test 1 dans la main', () => {
    expect(yahtzee([1,1,3,4,5])).toBe(2);
});

test('Test 3 dans la main', () => {
    expect(yahtzee([1,2,3,4,5])).toBe(2);
});