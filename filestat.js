const fs = require('fs');
fs.stat('1.txt', function(err, stats){
	if(err) throw err;
	console.log(stats.isFile());
	console.log(stats.isDirectory());
});