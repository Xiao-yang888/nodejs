const fs = require("fs");

var path = "./100.txt"
fs.unlink(path,function(err){
	if (err){
		console.log(err);
	}
	console.log("successFully deited");
});

console.log("代码执行完毕--->");