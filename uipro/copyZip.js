/*
1.安装依赖
npm install uglify-js -g

node copyZip.js

//压缩copy外层目录的Code ABC到微信工程
node copyZip.js zipCode

*/
//压缩代码,copy代码到wxmini工程
var fs=  require("fs");
var child_process = require('child_process');

let time = new Date().getTime();

let obj = JSON.parse(fs.readFileSync("module.json","utf-8"));
// console.log(obj);
child_process.execSync("layacmd compile");
//编译主域代码
child_process.execSync("uglifyjs bin/js/main.js -m -o ../wxmini/main.js");
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
child_process.execSync("uglifyjs bin/js/subout.js -m -o ../wxmini/src/myOpenDataContext/subout.js");

//压缩CodeC.js代码

for(let i = 0;i <  process.argv.length ;i++){
    if(process.argv[i]=="zipCode"){
        console.log(
        (child_process.execSync("uglifyjs ../CodeA.js -m -o ../wxmini/CodeA.js")+
        child_process.execSync("uglifyjs ../CodeB.js -m -o ../wxmini/CodeB.js")+
        child_process.execSync("uglifyjs ../CodeC.js -m -o ../wxmini/CodeC.js")).toString()
        );
    }
}
console.log(`${(new Date().getTime() -time) / 1000} s`);