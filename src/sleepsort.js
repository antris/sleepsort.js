// sleepsort.js
// ============
// Sorts an array of numbers using setTimeout

exports.sleepSort = function sleepSort(array, callback) {
	var length = array.length;
	var done = 0;
	var sortedArray = [];
	var add = function(num) {
		sortedArray.push(num);
		if (++done === length) {
			callback(sortedArray);
		}
	};
	array.forEach(function(num) {
		if (typeof num !== 'number') {
			throw new Error('Sleep sort works only with arrays of numbers');
		}
		setTimeout(function() { add(num); }, num);
	});
};