/**
 * @description Test cases for helpers/validateCardNumber.test.js
 */

const { assert } = require('chai');

const validateCardNumbers = require('../src/helpers/validateCardNumbers');

describe('#validateCardNumbers', function () {
	const maxLength = 19;
	const numbers1 = '1234 5678 9123 4567'; // 19 length
	const numbers2 = '123456789123283828182'; // 21 length
	const numbers3 = '12345678a';
	const numbers4 = '123456789127'; // 12 length

	it('should return a boolean', function () {
		const result = validateCardNumbers(numbers1, maxLength);
		assert.isBoolean(result);
	});

	it('should return false if the argument values are undefined', function () {
		const input = undefined;
		const result = validateCardNumbers(input, input);
		assert.isFalse(result);
	});

	it('should return false if the first argument value contains non-number strings', function () {
		const result = validateCardNumbers(numbers3, maxLength);
		assert.isFalse(result);
	});

	it('should return false if the first argument string length is greater than the max length', function () {
		const result = validateCardNumbers(numbers2, maxLength);
		assert.isFalse(result);
	});

	it('should return true if the first argument string length is less than the max length and contains number strings and/or white spaces', function () {
		const result1 = validateCardNumbers(numbers1, maxLength);
		const result2 = validateCardNumbers(numbers4, maxLength);
		assert.isTrue(result1);
		assert.isTrue(result2);
	});

});
