// sleepsort.js
// ============
// Sorts an array of numbers using setTimeout

exports.sleepSort = function sleepSort(array, callback) {
	var i = array.length;
	var sortedArray = [];

	array.forEach(function(num) {
		if (typeof num !== 'number') throw new Error('Sleep sort works only with arrays of numbers');
		setTimeout(function() {
			sortedArray.push(num);
			if (!--i) callback(sortedArray);
		}, num);
	});
};