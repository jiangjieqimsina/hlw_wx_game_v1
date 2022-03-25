/*
1.安装依赖npm install uglify-js -g

*/

//压缩代码,copy代码到wxmini工程
var fs=  require("fs");
var process = require('child_process');
process.execSync("layacmd compile");

//主域
// let str = fs.readFileSync("bin/js/main.js", "utf-8");
process.execSync("uglifyjs bin/js/main.js -m -o ../wxmini/main.js");

// fs.writeFileSync("D://weixin_project//Layaair_wx2//main_minigame//src//myOpenDataContext//son.min.js", str);
// console.log(str);