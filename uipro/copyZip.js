/*
1.安装依赖npm install uglify-js -g
*/
//压缩代码,copy代码到wxmini工程
var fs=  require("fs");
var process = require('child_process');
process.execSync("layacmd compile");

//编译主域代码
process.execSync("uglifyjs bin/js/main.js -m -o ../wxmini/main.js");
//编译子域代码
let ui = fs.readFileSync("bin/js/ui/layaUI.max.all.js", "utf-8");
let sub =  fs.readFileSync("bin/js/sub.js", "utf-8");
fs.writeFileSync("bin/js/subout.js",ui+sub,"utf-8");
process.execSync("uglifyjs bin/js/subout.js -m -o ../wxmini/src/myOpenDataContext/subout.js");
