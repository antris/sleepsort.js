# sleepsort.js

Sorts an array of numbers using setTimeout. Not very fast on arrays with high numbers. Or any numbers, really.

## Usage

	var sleepSort = require('./src/sleepsort').sleepSort;

	sleepSort([3, 1, 102, 55], function(sorted) {
		console.log(sorted);
	});

	// 102ms later...
	# => [1, 3, 55, 102]