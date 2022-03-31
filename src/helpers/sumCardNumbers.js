/**
 * Sum all numbers in the @param str
 *
 * @param {String} str credit card number
 * @returns {Int} total from credit card
 *
 */
export default function sumCardNumbers(str, lastNumber, numArr) {
	let total = 0;

	if (!numArr.includes(lastNumber)) return total;

	for (let i = 0; i < str.length; i++) {
		if (!isNaN(str[i])) {
			total += parseInt(str[i]);
		}
	}

	return total;
}
