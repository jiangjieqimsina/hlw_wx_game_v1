require('./weapp-adapter');
require("libs/laya.core.min.js");
require("libs/laya.wxmini.min.js");
require("libs/laya.ui.min.js");
// console.log( wx.getFriendCloudStorage());
wx.setUserCloudStorage({
    KVDataList:[{key:"score", value:"1"}],
    success: (res) =>{
        console.log(res);
    },
    fail: (res) =>{
        console.log(res);
    },
    complete: (res) =>{
    }
});
console.log("子域index.js!");