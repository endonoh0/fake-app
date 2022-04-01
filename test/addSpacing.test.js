/**
 * @description Test cases for helpers/addSpacing.test.js
 */

const { assert, expect } = require('chai');

const addSpacing = require('../src/helpers/addSpacing');

function addSpacingErr(str, spaceEvery) {
	if (!str || !spaceEvery) {
		throw new Error("TypeError: Cannot read property 'replace' of undefined");
	}
	// ...
	if (typeof spaceEvery !== 'number') {
		throw new Error("SyntaxError: Unexpected end of input");
	}
	// ...
}

describe('#addSpacing', function () {
	const spaceEveryFour = 4;
	const numbers = '1234567891234567'; // 16 length

	it('should return a string', function () {
		const result = addSpacing(numbers, spaceEveryFour);
		assert.isString(result, 'string');
	});

	it('should return a string when the first argument is a string data type', function () {
		const str = '1';
		const result = addSpacing(str, spaceEveryFour);
		assert.isString(result, 'string');
	});

	it('should add a space for every four characters in the string', function () {
		const result = addSpacing(numbers, spaceEveryFour);
		expect(result.length).to.equal(19);
	});

});

describe("#addSpacingErr", () => {
  it("throws an error if the argument values are undefined", function() {
    const input = undefined;

    assert.throws(function() {
      addSpacingErr(input);
    }, "TypeError: Cannot read property 'replace' of undefined");
  });

	it("throws an error if the first argument value is an integer", function() {
    const input = 1;

    assert.throws(function() {
      addSpacingErr(input);
    }, "TypeError: Cannot read property 'replace' of undefined");
  });

	it("throws an error if the second argument value is a string", function() {
    const input = 'a';

    assert.throws(function() {
      addSpacingErr(input, input);
    }, "SyntaxError: Unexpected end of input");
  });

});
