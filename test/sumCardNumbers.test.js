/**
 * @description Test cases for helpers/sumCardNumbers.test.js
 */

const { assert, expect } = require('chai');

const sumCardNumbers = require('../src/helpers/sumCardNumbers');

describe('#sumCardNumbers', function () {
	const numbers = '123456789123'; // 12 length
	const lastNum = numbers[numbers.length - 1];
	const LAST_NUMBERS = ['5', '2'];

	it('should return a number', function () {
		const result = sumCardNumbers(numbers, lastNum, LAST_NUMBERS);
		assert.isNumber(result, 'number');
	});

	it('should return zero when the first argument value is undefined', function () {
		const input = undefined;
		const result = sumCardNumbers(input, lastNum, LAST_NUMBERS);
		expect(result).equal(0)
	});

	it('should return a zero if the first argument contains a letter string', function () {
		const result = sumCardNumbers('adkljfa', lastNum, LAST_NUMBERS);
		expect(result).equal(0)
	});

	it('should return a zero if the last number is not a 5 or 2', function () {
		const result = sumCardNumbers(numbers, lastNum, LAST_NUMBERS);
		expect(result).equal(0)
	});

	it('should return the sum of the string if the last number is a 5 or 2', function () {
		const result1 = sumCardNumbers(numbers, '2', LAST_NUMBERS);
		const result2 = sumCardNumbers(numbers, '5', LAST_NUMBERS);
		expect(result1).equal(51)
		expect(result2).equal(51)
	});

});
