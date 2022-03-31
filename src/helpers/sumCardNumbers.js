/**
 * Sum all number characters.
 *
 * @param {String} str The str to add to the total
 * @param {String} lastNumber of str
 * @param {String[]} arr of string numbers
 * @returns {Int} total
 *
 */
export default function sumCardNumbers(str, lastNumber, arr) {
	let total = 0;

	if (!arr.includes(lastNumber)) return total;

	for (let i = 0; i < str.length; i++) {
		if (!isNaN(str[i])) {
			total += parseInt(str[i]);
		}
	}

	return total;
}
