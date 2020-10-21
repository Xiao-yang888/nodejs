const fs = require("fs");
const path = require('path');
const exec = require('child_process').exec;

function myWriteFile(dst, content) {
	fs.writeFileSync(dst, content, "utf-8");
}

var dst = "C:/Users/aimiliya/nodejs/10_19lianxi";
var fileName = "1.txt";
var content = "憨憨华华与吃辣的小洋";

myWriteFile(path.join(dst, fileName), content);

exec('explorer.exe.\\1.txt');