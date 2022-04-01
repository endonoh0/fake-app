/**
 * Adds spacing to @param str with @param spaceEvery.
 *
 * @param {String} str The str to be modified
 * @param {Int} spaceEvery number of characters before inserting a space
 * @return {String} The replaced string
 */
function addSpacing(str, spaceEvery) {
	// Match any single letter, number or underscore
	const matchAll = /\W/gi;
	// Match any single character every x occurences
	const matchEveryOccurrence = new RegExp('(.{' + spaceEvery + '})', "g");
	return str.replace(matchAll, '').replace(matchEveryOccurrence, '$1 ').trim();
}

module.exports = addSpacing;
