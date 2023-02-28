
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

test('Test 6 dans la main', () => {
    expect(yahtzee.sixs([1,6,2,6,2])).toBe(12);
});

test('Test brelan', () => {
    expect(yahtzee.three_of_a_kind([1,1,1,6,2])).toBe(11);
});

test('Test 4 identique', () => {
    expect(yahtzee.four_of_a_kind([1,1,1,1,2])).toBe(6);
});

test('Test full house', () => {
    expect(yahtzee.full_house([1,1,1,2,2])).toBe(25);
});

test('Test small straight', () => {
    expect(yahtzee.small_straight([1,2,3,4,2])).toBe(30);
});

test('Test larg straight', () => {
    expect(yahtzee.large_straight([1,2,3,4,5])).toBe(40);
});

test('Test chance', () => {
    expect(yahtzee.chance([1,2,3,4,5])).toBe(15);
});

test('Test yahtzee', () => {
    expect(yahtzee.yahtzee([1,1,1,1,1])).toBe(50);
});