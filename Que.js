document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
	  
	function customPrint (n, message) {
		let c = 0;
		var nIntervId = window.setInterval(function() {
			if (c < n) {
				console.log(message);
				c++;
			}
		}, 1000, c);
		if (c === n) {
			window.clearInterval(nIntervId);
		}
	}
	customPrint (5, "Hello, World!");
  }
}