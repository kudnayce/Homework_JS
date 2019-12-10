;!function() {
	window.working_with_array = {
		/*TASK 1*/
		min: function(arr) {
			return Math.min(...arr);
		},
		max: function(arr) {
			return Math.max(...arr);
		},
		avg: function(arr) {
			return (arr.reduce((a, b) => a + b, 0)) / arr.length;
		},
		coppy_arr: function (arr) {
			let newArray = arr.slice();
			return newArray;
		}
	}

}();
