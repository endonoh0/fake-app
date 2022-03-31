/**
 * Adds spacing to @param str with @param spaceEvery occurences.
 *
 * @param {String} str The str to be modified
 * @param {int} spaceEvery number of characters before inserting a space
 * @return {String} The replaced string
 */
export function addSpacing(str, spaceEvery) {
	// Match every any single letter, number or underscore
	const matchAll = /\W/gi;
	// Match any single character every x occurences
	var matchEveryOccurrence = new RegExp('(.{' + spaceEvery + '})', "g");
	return str.replace(matchAll, '').replace(matchEveryOccurrence, '$1 ').trim();
}
