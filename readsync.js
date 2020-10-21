/*加载模块*/
const fs = require("fs");
const path = require('path');
/*定义函数*/
function myReadFile(src){
	var content_text = fs.readFileSync(src, "utf-8");
	console.log(content_text);
}


var src = "C:/Users/aimiliya/nodejs/10_19lianxi";
var fileName = "1.txt"
myReadFile(path.join(src, fileName));

console.log("代码执行完毕--->");