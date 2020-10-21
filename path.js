var path = require('path');

var src01 = 'C:/User/aimiliya/nodejs/10_21/filestat';
console.log(path.normalize(src01));

var stringPath = path.join("C:", "Users", "aimiliya", "nodejs");
console.log(stringPath);

var filePath = 'C:/User/aimiliya/nodejs/10_21/filestat';
var dirPath = 'C:/User/aimiliya/nodejs';
console.log(path.relative(filePath, dirPath));