/**
 * Validate the credit card number.
 *
 * @param {String} str credit card number
 * @param {Int} length maximum string length
 * @returns {Bool}
 * 							1. Returns false for invalid card numbers OR
 * 								 when string length is greater than @param length
 * 							2. Returns true for valid card numbers
 *
 */
function validateCardNumbers(str, length) {
	if (!str || str.length > length) return false;

	// Match [0-9] and white spaces
	const conditionRegex = /^[\d\s]+$/;
	const regEx = new RegExp(conditionRegex);

	if (!regEx.test(str)) {
		return false;
	}
	return true;
}

module.exports = validateCardNumbers;
