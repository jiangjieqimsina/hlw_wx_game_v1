/*
1.安装依赖npm install uglify-js -g
*/
//压缩代码,copy代码到wxmini工程
var fs=  require("fs");
var process = require('child_process');



let obj = JSON.parse(fs.readFileSync("module.json","utf-8"));
// console.log(obj);

process.execSync("layacmd compile");

//编译主域代码
process.execSync("uglifyjs bin/js/main.js -m -o ../wxmini/main.js");
//编译子域代码
let _root = "bin/js/";
let ui = fs.readFileSync(_root+"ui/layaUI.max.all.js", "utf-8");
let rankui = "";//fs.readFileSync(_root+"ui/HlwRankView.js", "utf-8");

let arr = obj.path;
for(let i = 0;i < arr.length;i++){
    let m = arr[i];
    let m1 = _root+`${m}.js`;
    // console.log(">>"+m1+">>");
    rankui+= fs.readFileSync(m1, "utf-8");
}

let sub =  fs.readFileSync(_root+"sub.js", "utf-8");
fs.writeFileSync(_root+"subout.js",ui+rankui+sub,"utf-8");
process.execSync("uglifyjs bin/js/subout.js -m -o ../wxmini/src/myOpenDataContext/subout.js");

