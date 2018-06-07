const sum = function(a, b) {
	return a + b;
}

test('adds 2 and 2 to equal 4', () => {
	expect(sum(2, 2)).toBe(4);
});