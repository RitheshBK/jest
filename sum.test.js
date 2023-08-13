const sum = require('./sum');

test('Adds 2 numbers',() => {
    expect(sum(1,2)).toBe(3)
});