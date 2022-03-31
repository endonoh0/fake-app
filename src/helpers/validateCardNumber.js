/**
 * Validate the credit card number with @param str
 *
 * @param {String} str credit card number
 * @param {Int} length maximum string length
 * @returns {Any}
 * 							1. Returns undefined for invalid card numbers and
 * 								 when string length is greater than @param length
 * 							2. Returns @param str for valid card numbers
 *
 */
export function validateCardNumber(str, length) {
	// Match [0-9] and white spaces
	const conditionRegex = /^[\d\s]+$/;
	const regEx = new RegExp(conditionRegex);
	if (!regEx.test(str)) return '';
	return str;
}
