
const yahtzee = require('./yahtzee');

test('Test 1 dans la main', () => {
    expect(yahtzee.ones([1,1,3,4,5])).toBe(2);
});

test('Test 2 dans la main', () => {
    expect(yahtzee.twos([1,1,3,4,5])).toBe(0);
});

test('Test 3 dans la main', () => {
    expect(yahtzee.threes([1,1,3,4,5])).toBe(3);
});

test('Test 4 dans la main', () => {
    expect(yahtzee.fours([1,1,3,4,5])).toBe(4);
});

test('Test 5 dans la main', () => {
    expect(yahtzee.fives([5,5,5,4,5])).toBe(20);
});

test('Test 6 dans la main', () => {
    expect(yahtzee.sixs([1,6,2,6,2])).toBe(12);
});