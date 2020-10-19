const fs = require("fs");
const path = require('path');

// /*读取函数*/
// function myReadFile(src){
// 	var content_text = fs.readFileSync(src,"utf-8");
// 	console.log(content_text);
// }
// /*写入函数*/
// function myWriteFile(dst,content){
// 	fs.writeFileSync(dst, content, "utf-8");
// }

function myCopy(src,dst){
	fs.writeFileSync(dst, fs.readFileSync(src,"utf-8"), "utf-8");
}

var dst = "C:/Users/aimiliya/java/src/10_19lianxi";
var src = "C:/Users/aimiliya/java/src/10_19lianxi";
var fileName1 = "1.txt";
var fileName2 = "2.txt";

for (var i = 3; i <= 100; i++) {
	myCopy(path.join(src,fileName1),path.join(dst,i+".txt"));
}